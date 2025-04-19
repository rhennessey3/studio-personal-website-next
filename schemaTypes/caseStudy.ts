import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    // 1. title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // 2. subtitle
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'A short, descriptive subtitle displayed below the title in the header.',
      // validation: Rule => Rule.max(150) // Example validation
    }),
    // NEW: summary (used on /thinking page)
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text', // Use 'text' for potentially longer descriptions
      description: 'A brief summary of the case study, displayed on overview pages like /thinking.',
      rows: 3, // Optional: suggest a text area size
    }),
    // 3. slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    }),
    // 4. featuredImage
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: false, // Disable hotspot/cropping
      },
    }),
    // 6. sections
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'caseStudySection'}], // Reference to the caseStudySection object type
    }),
    // 7. metrics
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [{type: 'caseStudyMetric'}], // Reference to the caseStudyMetric object type
    }),
    // 8. tags
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}], // Reference to the tag schema
    }),
    // 9. published
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
    }),
    // 10. publishedDate
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
    },
  },
})