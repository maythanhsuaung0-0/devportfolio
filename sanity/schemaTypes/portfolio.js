import { defineField, defineType } from 'sanity';
import { usePaneRouter } from 'sanity/structure';

const portfolioSections = new Set(['experience', 'education', 'projects', 'resume']);

function PortfolioInput(props) {
  const { groupIndex, siblingIndex, routerPanesState } = usePaneRouter();
  const section = routerPanesState[groupIndex]?.[siblingIndex]?.id;

  if (!portfolioSections.has(section)) {
    return props.renderDefault(props);
  }

  return props.renderDefault({
    ...props,
    members: props.members.filter(member => member.kind !== 'field' || member.name === section),
  });
}

const experience = defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'object',
  fields: [
    defineField({ name: 'startDate', title: 'Start Date', type: 'date' }),
    defineField({
      name: 'isCurrentJob',
      title: 'Current job',
      type: 'boolean',
      initialValue: false,
      options: { layout: 'checkbox' },
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({ parent }) => parent?.isCurrentJob === true,
      validation: rule => rule.custom((value, context) => {
        if (context.parent?.isCurrentJob === true) {
          return true;
        }

        return value ? true : 'End Date is required when this is not your current job.';
      }),
    }),
    defineField({ name: 'role', title: 'Role', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'company', title: 'Company', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'responsibilities', title: 'Responsibilities', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { select: { title: 'role', subtitle: 'company' } },
});

const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'object',
  fields: [
    defineField({ name: 'year', title: 'Date range', type: 'string' }),
    defineField({ name: 'degree', title: 'Degree', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'school', title: 'School', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'major', title: 'Major', type: 'string' }),
    defineField({ name: 'courseWork', title: 'Coursework', type: 'text', rows: 3 }),
    defineField({ name: 'cca', title: 'Activities and clubs', type: 'text', rows: 3 }),
    defineField({ name: 'gpa', title: 'GPA', type: 'string' }),
  ],
  preview: { select: { title: 'degree', subtitle: 'school' } },
});

const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'object',
  fields: [
    defineField({ name: 'projectName', title: 'Project name', type: 'string', validation: rule => rule.required() }),
    defineField({ name: 'name', title: 'School or company', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'tools', title: 'Tools', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'details', title: 'Details', type: 'text', rows: 4 }),
  ],
  preview: { select: { title: 'projectName', subtitle: 'name' } },
});

const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio Data',
  type: 'document',
  components: { input: PortfolioInput },
  fields: [
    defineField({
      name: 'resume',
      title: 'Resume',
      description: 'Upload a PDF and publish your changes to update the resume on your portfolio.',
      type: 'file',
      options: { accept: 'application/pdf' },
    }),
    defineField({ name: 'experience', title: 'Work Experience', type: 'array', of: [{ type: 'experience' }] }),
    defineField({ name: 'education', title: 'Education', type: 'array', of: [{ type: 'education' }] }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'object',
      fields: [
        defineField({ name: 'school', title: 'School projects', type: 'array', of: [{ type: 'project' }] }),
        defineField({ name: 'work', title: 'Work projects', type: 'array', of: [{ type: 'project' }] }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Portfolio Data' }) },
});

export const schemaTypes = [experience, education, project, portfolio];
