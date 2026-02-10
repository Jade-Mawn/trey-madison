import { defineType, defineField } from 'sanity';

export const blurb = defineType({
  name: 'blurb',
  title: 'Blurb',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timePeriod',
      title: 'Time Period',
      type: 'object',
      fields: [
        defineField({
          name: 'startDate',
          title: 'Start Date',
          type: 'date',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'endDate',
          title: 'End Date',
          type: 'date',
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.max(5),
    }),
    defineField({
      name: 'deepDescription',
      title: 'Deep Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});