import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudySection',
  title: 'Case Study Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: ['Introduction', 'Challenge', 'Solution', 'Result', 'Custom'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent', // Reference to the blockContent schema
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Section Image',
      type: 'image',
      description: 'Optional image to display alongside the text content for this section.',
      options: {
        hotspot: false, // Disable hotspot/cropping
      },
    }),
    defineField({
      name: 'layout',
      title: 'Section Layout', // Updated title
      type: 'string',
      description: 'Choose the layout for this section (e.g., image position or text columns).', // Updated description
      options: {
        list: [
          {title: 'Text Left / Image Right', value: 'textLeft'},
          {title: 'Image Left / Text Right', value: 'imageLeft'},
          {title: 'Two Column Text (No Image)', value: 'twoColumnText'}, // Added option
          {title: 'Three-Column Slider', value: 'threeColumnSlider'}, // <-- Add this
          {title: 'Two Column Text Rows / Image Right', value: 'twoColumnTextRowsImageRight'}, // <-- Add this new layout
        ],
        layout: 'radio', // or 'dropdown'
      },
      // Optionally hide this field if no image is present using 'hidden' callback
      // hidden: ({ parent }) => !parent?.image
    }),
    // New field for the right column in 'twoColumnText' layout
    defineField({
      name: 'contentRight',
      title: 'Content (Right Column)',
      type: 'blockContent', // Reference to the blockContent schema
      hidden: ({parent}) => parent?.layout !== 'twoColumnText', // Only show if layout is 'twoColumnText'
    }),
    // Add sliderItems field for the 'threeColumnSlider' layout
    defineField({
      name: 'sliderItems',
      title: 'Slider Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: false}, // Disable hotspot/cropping
              validation: (Rule) => Rule.required(), // Make image required per item
            }),
            defineField({
              name: 'subhead',
              title: 'Subhead',
              type: 'string',
              validation: (Rule) => Rule.required(), // Make subhead required
            }),
            defineField({
              name: 'bodyText',
              title: 'Body Text',
              type: 'blockContent', // Reference blockContent
              validation: (Rule) => Rule.required(), // Make body text required
            }),
          ],
          // Optional: Preview configuration for slider items
          preview: {
            select: {
              title: 'subhead',
              media: 'image',
            },
            prepare({title, media}) {
              return {
                title: title || 'Untitled Slide',
                media: media,
              }
            },
          },
        },
      ],
      // Hide this field unless the layout is 'threeColumnSlider'
      hidden: ({parent}) => parent?.layout !== 'threeColumnSlider',
    }),
    // Fields for 'twoColumnTextRowsImageRight' layout
    defineField({
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'The main heading displayed above the two columns for this section.',
      hidden: ({parent}) => parent?.layout !== 'twoColumnTextRowsImageRight',
    }),
    defineField({
      name: 'leftColumnItems',
      title: 'Left Column Content Items',
      type: 'array',
      description: 'Items to display in the left column (subhead + text).',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'subhead',
              title: 'Subheading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bodyText',
              title: 'Body Text',
              type: 'blockContent', // Reference blockContent
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'subhead',
            },
            prepare({title}) {
              return {
                title: title || 'Untitled Item',
              }
            },
          },
        },
      ],
      hidden: ({parent}) => parent?.layout !== 'twoColumnTextRowsImageRight',
    }),
    defineField({
      name: 'rightColumnImage',
      title: 'Right Column Image',
      type: 'image',
      description: 'The image to display centered in the right column.',
      options: {
        hotspot: false, // Disable hotspot/cropping
      },
      hidden: ({parent}) => parent?.layout !== 'twoColumnTextRowsImageRight',
    }),
    defineField({ // New backgroundColor field
      name: 'backgroundColor',
      title: 'Background Color',
      description: 'Select a background color for this section. If none is selected, the default background will be used.',
      type: 'string',
      options: {
        list: [
          { title: 'Black (#151515)', value: 'rh-black' },
          { title: 'Grey (#F0F0F0)', value: 'rh-grey' },
          { title: 'White (#FCFCFC)', value: 'rh-white' },
        ],
        layout: 'radio', // Using radio as recommended
        direction: 'horizontal', // For radio layout
      },
    }), // End of backgroundColor field
  ],
})