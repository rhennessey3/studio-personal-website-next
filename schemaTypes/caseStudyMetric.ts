import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudyMetric',
  title: 'Case Study Metric',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(), // e.g., "Conversion Rate Increase"
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule) => Rule.required(), // e.g., "25%"
    }),
  ],
})