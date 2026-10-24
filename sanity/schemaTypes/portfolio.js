import { defineField, defineType } from "sanity";
import { usePaneRouter } from "sanity/structure";

const portfolioSections = new Set([
  "aboutMe",
  "skills",
  "experience",
  "education",
  "projects",
  "resume",
]);

function PortfolioInput(props) {
  const { groupIndex, siblingIndex, routerPanesState } = usePaneRouter();
  const section = routerPanesState[groupIndex]?.[siblingIndex]?.id;

  if (!portfolioSections.has(section)) {
    return props.renderDefault(props);
  }

  return props.renderDefault({
    ...props,
    members: props.members.filter(
      (member) => member.kind !== "field" || member.name === section,
    ),
  });
}

const experience = defineType({
  name: "experience",
  title: "Work Experience",
  type: "object",
  fields: [
    defineField({ name: "startDate", title: "Start Date", type: "date" }),
    defineField({
      name: "isCurrentJob",
      title: "Current job",
      type: "boolean",
      initialValue: false,
      options: { layout: "checkbox" },
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      hidden: ({ parent }) => parent?.isCurrentJob === true,
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context.parent?.isCurrentJob === true) {
            return true;
          }

          return value
            ? true
            : "End Date is required when this is not your current job.";
        }),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: { select: { title: "role", subtitle: "company" } },
});

const education = defineType({
  name: "education",
  title: "Education",
  type: "object",
  fields: [
    defineField({ name: "startDate", title: "Start Date", type: "date" }),
    defineField({
      name: "isCurrentSchool",
      title: "Current School",
      type: "boolean",
      initialValue: false,
      options: { layout: "checkbox" },
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      hidden: ({ parent }) => parent?.isCurrentSchool === true,
      validation: (rule) =>
        rule.custom((value, context) => {
          if (context.parent?.isCurrentSchool === true) {
            return true;
          }
          return value
            ? true
            : "End Date is required when this is not your current school.";
        }),
    }),
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "school",
      title: "School",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "major", title: "Major", type: "string" }),
    defineField({
      name: "courseWork",
      title: "Coursework",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "cca",
      title: "Activities and clubs",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "gpa", title: "GPA", type: "string" }),
  ],
  preview: { select: { title: "degree", subtitle: "school" } },
});

const project = defineType({
  name: "project",
  title: "Project",
  type: "object",
  fields: [
    defineField({
      name: "projectName",
      title: "Project name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "name", title: "School or company", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "details", title: "Details", type: "text", rows: 4 }),
    defineField({
      name: "links",
      title: "Links",
      description: "Add the live website, source code, case study, or other project links.",
      type: "array",
      of: [
        {
          name: "projectLink",
          title: "Project link",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "For example: Live website or GitHub",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
            }),
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        },
      ],
    }),
    defineField({
      name: "photos",
      title: "Photos",
      description: "Upload screenshots or photos in the order you want them displayed.",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "Briefly describe what is visible in the image.",
              validation: (rule) => rule.required().warning("Add alt text so the image is accessible."),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: { select: { title: "projectName", subtitle: "name" } },
});

const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio Data",
  type: "document",
  components: { input: PortfolioInput },
  fields: [
    defineField({
      name: "skills",
      title: "Skills & tools",
      description: "Add tools to each category in the order you want them shown on the homepage.",
      type: "object",
      fields: [
        ["frontend", "Frontend"],
        ["backend", "Backend"],
        ["languages", "Languages"],
        ["dataAndDeployment", "Data & deployment"],
        ["designAndWorkflow", "Design & workflow"],
      ].map(([name, title]) => defineField({
        name,
        title,
        type: "array",
        of: [{ type: "string" }],
        options: { layout: "tags" },
      })),
    }),
    defineField({
      name: "aboutMe",
      title: "About me",
      description:
        "Write your full biography here. Use a blank line between paragraphs, then publish to update the homepage.",
      type: "text",
      rows: 20,
    }),
    defineField({
      name: "resume",
      title: "Resume",
      description:
        "Upload a PDF and publish your changes to update the resume on your portfolio.",
      type: "file",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "experience",
      title: "Work Experience",
      type: "array",
      of: [{ type: "experience" }],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "education" }],
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "project" }],
    }),
  ],
  preview: { prepare: () => ({ title: "Portfolio Data" }) },
});

export const schemaTypes = [experience, education, project, portfolio];
