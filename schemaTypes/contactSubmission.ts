import {defineField, defineType} from 'sanity'
// Consider importing icons if you want to use them in the preview
// import { EnvelopeIcon, CheckCircleIcon } from '@sanity/icons'

export default defineType({
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'read',
      title: 'Read',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      read: 'read',
    },
    prepare({title, subtitle, read}) {
      // You can replace the placeholder text with actual icons if installed
      const icon = read ? '✅' : '✉️' // Placeholder icons
      return {
        title: title,
        subtitle: subtitle,
        media: icon, // Use the icon string directly
      }
    },
  },
})