import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'profile',
      title: 'Profile',
      type: 'reference',
      to: {type: 'profile'}, // Reference to the profile schema
      validation: (Rule) => Rule.required(),
      // Consider hiding this field if skills are always managed within a profile context
      // hidden: true,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
      // Optional: Define a list of predefined categories
      // options: {
      //   list: ['Programming Language', 'Framework', 'Tool', 'Soft Skill'],
      // },
      // Alternatively, consider making 'category' a reference to a separate 'skillCategory' document type
      // type: 'reference',
      // to: { type: 'skillCategory' }
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
      // Optional: Use a slider for input
      // options: {
      //   layout: 'slider'
      // }
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      proficiency: 'proficiency',
    },
    prepare({title, subtitle, proficiency}) {
      return {
        title: title,
        subtitle: `${subtitle} - Proficiency: ${proficiency || 'N/A'}`,
      }
    },
  },
})