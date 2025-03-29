import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Optional: Add a slug field if you plan to use tags in URLs
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 50,
    //   },
    //   validation: (Rule) => Rule.required(),
    // }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})