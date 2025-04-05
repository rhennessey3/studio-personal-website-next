import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  // Singleton behavior is now primarily managed in sanity.config.ts (Desk Tool structure)
  fields: [
    defineField({
      name: 'title', // Example field, can be removed if not needed
      title: 'Site Title',
      type: 'string',
      description: 'The title of the website, used in metadata and potentially headers.',
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume File',
      description: 'Upload the latest resume file (PDF recommended).',
      type: 'file',
      options: {
        accept: '.pdf', // Only allow PDF uploads
      },
      validation: (Rule) => Rule.required(), // Make resume required
    }),
    // Add other global settings fields here if needed in the future
    // e.g., social media links, contact email
  ],
  // Optional: Preview configuration for the singleton
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Site Settings',
      }
    },
  },
})