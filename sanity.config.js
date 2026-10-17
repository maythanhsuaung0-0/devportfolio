'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes/portfolio';

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: S => S.list().title('Content').items([
        ...[
          { id: 'experience', title: 'Work Experience' },
          { id: 'education', title: 'Education' },
          { id: 'projects', title: 'Projects' },
          { id: 'resume', title: 'Resume' },
        ].map(({ id, title }) =>
          S.listItem().id(id).title(title).child(
            S.document().id(id).title(title).schemaType('portfolio').documentId('portfolio'),
          ),
        ),
      ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: [],
  },
  document: {
    actions: actions => actions.filter(action => action.action !== 'duplicate'),
  },
});
