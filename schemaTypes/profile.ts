import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  // Consider limiting this document type to a single instance if it represents *your* profile
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title', // e.g., Software Engineer, Web Developer
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text', // A longer text field for a short biography
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping/positioning
      },
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    // References to other documents linked to this profile
    defineField({
      name: 'workExperiences',
      title: 'Work Experiences',
      type: 'array',
      of: [{type: 'reference', to: {type: 'workExperience'}}],
    }),
    defineField({
      name: 'educationHistory',
      title: 'Education History',
      type: 'array',
      of: [{type: 'reference', to: {type: 'education'}}],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'lastName',
      media: 'profileImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: `${title} ${subtitle}`,
        media: media,
      }
    },
  },
})