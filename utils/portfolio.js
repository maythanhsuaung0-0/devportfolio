import 'server-only';
import { createClient } from '@sanity/client';

const projectFields = `
  "id": _key,
  name,
  projectName,
  year,
  "tools": coalesce(tools, []),
  details
`;

export const portfolioQuery = `*[_type == "portfolio" && _id == "portfolio"][0]{
  "resumeUrl": resume.asset->url,
  "experience": coalesce(experience[]{
    "id": _key,
    year,
    role,
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
    cgpa
  }, []),
  "projects": {
    "school": coalesce(projects.school[]{${projectFields}}, []),
    "work": coalesce(projects.work[]{${projectFields}}, [])
  }
}`;

export async function getPortfolioData() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!projectId || !dataset) {
    return { resumeUrl: null, experience: [], education: [], projects: { school: [], work: [] } };
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

  return {
    resumeUrl: data?.resumeUrl ?? null,
    experience: data?.experience ?? [],
    education: data?.education ?? [],
    projects: {
      school: data?.projects?.school ?? [],
      work: data?.projects?.work ?? [],
    },
  };
}
