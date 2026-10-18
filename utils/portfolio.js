import 'server-only';
import { createClient } from '@sanity/client';
import localPortfolio from '../public/data.json';

const fallbackPortfolio = { ...localPortfolio, resumeUrl: '/MayAung_resume.pdf' };

const projectFields = `
  "id": _key,
  name,
  projectName,
  year,
  "tools": coalesce(tools, []),
  details,
  "links": coalesce(links[]{
    "id": _key,
    label,
    url
  }, []),
  "photos": coalesce(photos[]{
    "id": _key,
    alt,
    caption,
    "url": asset->url,
    "width": asset->metadata.dimensions.width,
    "height": asset->metadata.dimensions.height
  }, [])
`;

export const portfolioQuery = `*[_type == "portfolio" && _id == "portfolio"][0]{
  aboutMe,
  skills {
    frontend,
    backend,
    languages,
    dataAndDeployment,
    designAndWorkflow
  },
  "resumeUrl": resume.asset->url,
  "experience": coalesce(experience[]{
    "id": _key,
    year,
    role,
    startDate,
    endDate,
    isCurrentJob,
    company,
    "responsibilities": coalesce(responsibilities, [])
  }, []),
  "education": coalesce(education[]{
    "id": _key,
    year,
    degree,
    school,
    major,
    courseWork,
    cca,
    "cgpa": coalesce(gpa, cgpa)
  }, []),
  "projects": coalesce(projects[]{${projectFields}}, [])
}`;

export async function getPortfolioData() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!projectId || !dataset) {
    return fallbackPortfolio;
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2026-10-16',
    perspective: 'published',
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN || undefined,
  });

  const data = await client.fetch(portfolioQuery, {}, {
    next: { revalidate: 60, tags: ['portfolio'] },
  });

  if (!data) return fallbackPortfolio;

  return {
    aboutMe: data.aboutMe ?? fallbackPortfolio.aboutMe,
    skills: Object.fromEntries(Object.entries(fallbackPortfolio.skills).map(([category, tools]) => [
      category, data.skills?.[category] ?? tools,
    ])),
    resumeUrl: data?.resumeUrl ?? fallbackPortfolio.resumeUrl,
    experience: data?.experience ?? [],
    education: data?.education ?? [],
    projects: data.projects?.length
      ? data.projects
      : fallbackPortfolio.projects,
  };
}
