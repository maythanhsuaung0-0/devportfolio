import Image from "next/image";
import RevealWords from "@/components/RevealWords";
import ScrollReveal from "@/components/ScrollReveal";
import { getPortfolioData } from "../../utils/portfolio";

export const revalidate = 60;

const skills = [
  [
    "Frontend",
    "HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue.js, Tailwind CSS, Material UI, Redux, React Query",
  ],
  ["Backend", "Node.js, Express.js, Python, Flask"],
  ["Languages", "C++, Java, C#, Rust (learning)"],
  ["Data & deployment", "MySQL, PostgreSQL, AWS S3, Heroku, Vercel"],
  ["Design & workflow", "Figma, Git, GitHub"],
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
  if (!item.startDate) return item.year || (item.isCurrentJob ? "Present" : "");
  const end = item.isCurrentJob ? "Present" : formatDate(item.endDate);
  return [formatDate(item.startDate), end].filter(Boolean).join(" – ");
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
  const { resumeUrl, projects, experience, education } =
    await getPortfolioData();
  const allProjects = [
    ...projects.school.map((project) => ({
      ...project,
      kind: "School project",
    })),
    ...projects.work.map((project) => ({ ...project, kind: "Work project" })),
  ];

  return (
    <main id="top" className="document">
      <ScrollReveal />
      <section className="document-intro" aria-labelledby="intro-heading">
        <div className="intro-heading">
          <div>
            <h1 id="intro-heading">May Than Hsu</h1>
            <p className="intro-role">Frontend &amp; fullstack developer</p>
          </div>
          <Image
            src="/myID.png"
            alt="May Than Hsu"
            width={76}
            height={92}
            className="portrait"
            priority
          />
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
        <h2 id="projects-heading"><RevealWords>Projects</RevealWords></h2>
        <div className="entry-list">
          {allProjects.length === 0 && <p><RevealWords>Project details are coming soon.</RevealWords></p>}
          {allProjects.map((project, index) => (
            <article
              className="project-entry"
              key={`${project.kind}-${project.id ?? index}`}
            >
              <div className="entry-heading">
                <h3><RevealWords>{project.projectName}</RevealWords></h3>
                {project.year && (
                  <span className="entry-date"><RevealWords>{project.year}</RevealWords></span>
                )}
              </div>
              <p className="entry-context">
                <RevealWords>{[project.kind, project.name].filter(Boolean).join(" · ")}</RevealWords>
              </p>
              {project.details && <p><RevealWords>{project.details}</RevealWords></p>}
              {project.tools.length > 0 && (
                <p className="project-tools">
                  <span className="sr-only">Tools: </span>
                  <RevealWords>{project.tools.join(", ")}</RevealWords>
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="document-section"
        aria-labelledby="about-heading"
      >
        <h2 id="about-heading"><RevealWords>About</RevealWords></h2>
        <div className="body-copy">
          <p>
            <RevealWords>
              I started coding after high school and have been learning and
              building ever since. I enjoy solving complex problems and turning
              designs into responsive, visually thoughtful websites.
            </RevealWords>
          </p>
          <p>
            <RevealWords>
              My early experience includes an internship at THtwin Innovation Lab
              and frontend development at Nawphire. I&apos;ve built RESTful APIs,
              worked with relational databases, and deployed applications with
              Heroku and Vercel.
            </RevealWords>
          </p>
          <p>
            <RevealWords>
              I&apos;m currently building projects in TypeScript and learning Rust
              to deepen my understanding of systems programming. Away from the
              keyboard, I play chess to sharpen my problem-solving and rational
              thinking.
            </RevealWords>
          </p>
        </div>
        <div id="skills" className="skills-section">
          <h3><RevealWords>Skills &amp; tools</RevealWords></h3>
          <dl className="skills-list">
            {skills.map(([name, tools]) => (
              <div key={name}>
                <dt><RevealWords>{name}</RevealWords></dt>
                <dd><RevealWords>{tools}</RevealWords></dd>
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
        <h2 id="experience-heading"><RevealWords>Experience</RevealWords></h2>
        <div className="entry-list entry-list--collapsible">
          {experience.length === 0 && (
            <p><RevealWords>Experience details are coming soon.</RevealWords></p>
          )}
          {experience.map((item, index) => (
            <details
              className="resume-entry experience-entry"
              key={item.id ?? index}
            >
              <summary>
                <span className="resume-entry-title"><RevealWords>{item.company}</RevealWords></span>
                {experiencePeriod(item) && (
                  <span className="entry-date"><RevealWords>{experiencePeriod(item)}</RevealWords></span>
                )}
                <span className="disclosure-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="resume-entry-content">
                <h3><RevealWords>{item.role}</RevealWords></h3>
                <p className="entry-context"><RevealWords>{item.company}</RevealWords></p>
                {item.responsibilities.length > 0 && (
                  <ul className="responsibilities">
                    {item.responsibilities.map((responsibility, i) => (
                      <li key={i}><RevealWords>{responsibility}</RevealWords></li>
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
        <h2 id="education-heading"><RevealWords>Education</RevealWords></h2>
        <div className="entry-list entry-list--collapsible">
          {education.length === 0 && <p><RevealWords>Education details are coming soon.</RevealWords></p>}
          {education.map((item, index) => (
            <details
              className="resume-entry education-entry"
              key={item.id ?? index}
            >
              <summary>
                <span className="resume-entry-title"><RevealWords>{item.school}</RevealWords></span>
                {item.year && <span className="entry-date"><RevealWords>{item.year}</RevealWords></span>}
                <span className="disclosure-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="resume-entry-content">
                <h3><RevealWords>{item.degree}</RevealWords></h3>
                <p className="entry-context"><RevealWords>{item.school}</RevealWords></p>
                <dl className="education-details">
                  {[
                    ["Major", item.major],
                    ["Coursework", item.courseWork],
                    ["Activities", item.cca],
                    ["GPA", item.cgpa],
                  ]
                    .filter(([, value]) => value)
                    .map(([label, value]) => (
                      <div key={label}>
                        <dt><RevealWords>{label}</RevealWords></dt>
                        <dd><RevealWords>{value}</RevealWords></dd>
                      </div>
                    ))}
                </dl>
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer id="contact" className="document-section document-footer">
        <h2><RevealWords>Get in touch</RevealWords></h2>
        <p><RevealWords>Have a project in mind? I&apos;d love to hear about it.</RevealWords></p>
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
