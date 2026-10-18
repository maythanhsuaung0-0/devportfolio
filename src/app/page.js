import Image from "next/image";
import ProjectGrid from "@/components/ProjectGrid";
import RevealWords from "@/components/RevealWords";
import ScrollReveal from "@/components/ScrollReveal";
import { getPortfolioData } from "../../utils/portfolio";

export const revalidate = 60;

const skillCategories = [
  ["frontend", "Frontend"],
  ["backend", "Backend"],
  ["languages", "Languages"],
  ["dataAndDeployment", "Data & deployment"],
  ["designAndWorkflow", "Design & workflow"],
];

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function experiencePeriod(item) {
  if (!item.startDate)
    return item.year || (item.isCurrentSchool ? "Present" : "");
  const end = item.isCurrentSchool ? "Present" : formatDate(item.endDate);
  return [formatDate(item.startDate), end].filter(Boolean).join(" – ");
}

function formatCoursework(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return String(value ?? "")
    .split(/\s*(?:\r?\n|;)\s*/)
    .filter(Boolean)
    .join(", ");
}

function ProfileLinks() {
  return (
    <>
      <a
        href="https://github.com/maythanhsuaung0-0"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/maythanhsu/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </>
  );
}

export default async function Home() {
  const { aboutMe, skills, resumeUrl, projects, experience, education } =
    await getPortfolioData();
  const skillRows = skillCategories
    .map(([key, label]) => [label, skills?.[key] ?? []])
    .filter(([, tools]) => tools.length > 0);

  return (
    <main id="top" className="document">
      <ScrollReveal />
      <section className="document-intro" aria-labelledby="intro-heading">
        <div className="intro-heading">
          <div>
            <h1 id="intro-heading">
              May Than Hsu{" "}
              <span className="name-ending">
                Aung
                <svg
                  className="name-pencil-lines"
                  viewBox="0 0 86 18"
                  fill="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M3 6C25 2 53 6 82 3M13 14C32 10 55 14 76 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="intro-role">Software Engineer</p>
          </div>
          <div className="portrait-frame">
            <Image
              src="/myID.png"
              alt="May Than Hsu"
              width={200}
              height={200}
              sizes="(max-width: 540px) 136px, 160px"
              className="portrait"
              priority
            />
          </div>
        </div>
        <p className="intro-description">
          I build responsive websites and web applications, from thoughtful
          interfaces to the APIs and databases behind them. A fast learner,
          always learning by making.
        </p>
        <div className="profile-links">
          <a
            className="resume-link"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            View résumé <span aria-hidden="true">↗</span>
          </a>
          <ProfileLinks />
          <a href="mailto:maythanhsuag@gmail.com">Email</a>
        </div>
      </section>

      <section
        id="projects"
        className="document-section"
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading">
          <RevealWords>Projects</RevealWords>
        </h2>
        <ProjectGrid projects={projects} />
      </section>

      <section
        id="about"
        className="document-section"
        aria-labelledby="about-heading"
      >
        <h2 id="about-heading">
          <RevealWords>About</RevealWords>
        </h2>
        <div className="body-copy about-copy">
          {aboutMe
            .split(/\n\s*\n/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean)
            .map((paragraph, index) => (
              <p key={index}>
                <RevealWords>{paragraph}</RevealWords>
              </p>
            ))}
        </div>
        <div id="skills" className="skills-section">
          <h3>
            <RevealWords>Skills &amp; tools</RevealWords>
          </h3>
          <dl className="skills-list">
            {skillRows.map(([name, tools]) => (
              <div key={name}>
                <dt>
                  <RevealWords>{name}</RevealWords>
                </dt>
                <dd>
                  <RevealWords>{tools.join(", ")}</RevealWords>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="experience"
        className="document-section"
        aria-labelledby="experience-heading"
      >
        <h2 id="experience-heading">
          <RevealWords>Experience</RevealWords>
        </h2>
        <div className="entry-list entry-list--collapsible">
          {experience.length === 0 && (
            <p>
              <RevealWords>Experience details are coming soon.</RevealWords>
            </p>
          )}
          {experience.map((item, index) => (
            <details
              className="resume-entry experience-entry"
              key={item.id ?? index}
            >
              <summary>
                <span className="resume-entry-title">
                  <RevealWords>{item.company}</RevealWords>
                </span>
                {experiencePeriod(item) && (
                  <span className="entry-date">
                    <RevealWords>{experiencePeriod(item)}</RevealWords>
                  </span>
                )}
                <span className="disclosure-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="resume-entry-content">
                <h3>
                  <RevealWords>{item.role}</RevealWords>
                </h3>
                <p className="entry-context">
                  <RevealWords>{item.company}</RevealWords>
                </p>
                {item.responsibilities.length > 0 && (
                  <ul className="responsibilities">
                    {item.responsibilities.map((responsibility, i) => (
                      <li key={i}>
                        <RevealWords>{responsibility}</RevealWords>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="document-section"
        aria-labelledby="education-heading"
      >
        <h2 id="education-heading">
          <RevealWords>Education</RevealWords>
        </h2>
        <div className="entry-list entry-list--collapsible">
          {education.length === 0 && (
            <p>
              <RevealWords>Education details are coming soon.</RevealWords>
            </p>
          )}
          {education.map((item, index) => (
            <details
              className="resume-entry education-entry"
              key={item.id ?? index}
            >
              <summary>
                <span className="resume-entry-title">
                  <RevealWords>{item.school}</RevealWords>
                </span>
                {item.year && (
                  <span className="entry-date">
                    <RevealWords>{item.year}</RevealWords>
                  </span>
                )}
                <span className="disclosure-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="resume-entry-content">
                <h3>
                  <RevealWords>{item.degree}</RevealWords>
                </h3>
                <p className="entry-context">
                  <RevealWords>{item.school}</RevealWords>
                </p>
                <dl className="education-details">
                  {[
                    ["Major", item.major],
                    ["Coursework", formatCoursework(item.courseWork)],
                    ["Activities", item.cca],
                    ["GPA", item.cgpa],
                  ]
                    .filter(([, value]) => value)
                    .map(([label, value]) => (
                      <div key={label}>
                        <dt>
                          <RevealWords>{label}</RevealWords>
                        </dt>
                        <dd>
                          <RevealWords>{value}</RevealWords>
                        </dd>
                      </div>
                    ))}
                </dl>
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer id="contact" className="document-section document-footer">
        <h2>
          <RevealWords>Get in touch</RevealWords>
        </h2>
        <p>
          <RevealWords>
            Have a project in mind? I&apos;d love to hear about it.
          </RevealWords>
        </p>
        <a className="contact-email" href="mailto:maythanhsuag@gmail.com">
          <RevealWords>maythanhsuag@gmail.com</RevealWords>
        </a>
        <div className="footer-links">
          <ProfileLinks />
          <a
            href="https://www.instagram.com/she_shizuko_/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href="mailto:maythanhsuaung1111@gmail.com">Alternate email</a>
          <a href="#top" className="back-to-top">
            Back to top ↑
          </a>
        </div>
        <p className="footer-note">
          May Than Hsu <span aria-hidden="true">/</span> Mayshecodes
        </p>
      </footer>
    </main>
  );
}
