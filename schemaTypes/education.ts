import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'profile',
      title: 'Profile',
      type: 'reference',
      to: {type: 'profile'}, // Reference to the profile schema
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
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
      type: 'datetime', // Optional
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text', // Optional
    }),
  ],
  preview: {
    select: {
      title: 'institution',
      subtitle: 'degree',
    },
  },
})