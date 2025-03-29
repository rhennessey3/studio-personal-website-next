import {defineType, defineArrayMember} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * portable text content blocks.
 * You can add additional types to this array if you want to define
 * custom components that can be embedded in rich text.
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what textual styles are available block-to-block.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      // Lists let you specify the list types available.
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you specify inline text styles and annotations.
      marks: {
        // Decorators render inline styles.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
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
    }),
    // You can add additional types here. Note that you need
    // corresponding React components to render them.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    // Uncomment the following lines to enable code blocks
    // defineArrayMember({
    //   type: 'code'
    // })
  ],
})