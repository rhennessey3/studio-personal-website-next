import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'profile',
      title: 'Profile',
      type: 'reference',
      to: {type: 'profile'}, // Reference to the profile schema
      validation: (Rule) => Rule.required(),
      // Consider hiding this field if work experiences are always managed within a profile context
      // hidden: true,
    }),
    defineField({
      name: 'company',
      title: 'Company',
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
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime', // Optional - leave blank if current position
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text', // Use text for potentially longer descriptions
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'keyAchievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{type: 'string'}], // Simple array of strings for achievements
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'position',
      subtitle: 'company',
    },
  },
})