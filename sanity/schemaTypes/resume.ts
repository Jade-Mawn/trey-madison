import { defineType, defineField } from 'sanity';

export const resume = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blurbs',
      title: 'Blurbs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blurb' }] }],
    }),
  ],
});