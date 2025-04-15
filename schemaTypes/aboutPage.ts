import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'The main heading displayed at the top of the About page.',
    }),
    defineField({
      name: 'contentBody',
      title: 'Content Body',
      type: 'array',
      description: 'The main rich text content for the About page.',
      of: [
        {
          type: 'block', // Standard text formatting
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Numbered', value: 'number'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image', // Allow embedding images
          options: {hotspot: true},
        },
      ],
    }),
  ],
  // Optional: Preview configuration for Sanity Studio
  preview: {
    select: {
      title: 'pageTitle',
    },
    prepare({title}) {
      return {
        title: title || 'About Page Content',
      }
    },
  },
})