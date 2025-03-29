import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudySection',
  title: 'Case Study Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: ['Introduction', 'Challenge', 'Solution', 'Result', 'Custom'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent', // Reference to the blockContent schema
      validation: (Rule) => Rule.required(),
    }),
  ],
})