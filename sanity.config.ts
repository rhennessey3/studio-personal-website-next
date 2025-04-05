import {defineConfig} from 'sanity'
// Import deskTool and required types
import {deskTool} from 'sanity/desk' // Correct import path for deskTool
// Let TypeScript infer types for S and listItem
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// Import icon for singleton
import {CogIcon} from '@sanity/icons'

// Define the singleton document types
const singletonTypes = new Set(['siteSettings'])

export default defineConfig({
  name: 'default',
  title: 'personal-website-next',

  projectId: 'c8df90ck',
  dataset: 'production',

  plugins: [
    // Configure deskTool with the singleton structure
    deskTool({
      structure: (S) => // Remove explicit type, let TS infer
        S.list()
          .title('Content')
          .items([
            // Singleton item
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings') // Use fixed document ID
              ),
            S.divider(),
            // Filter out the singleton type from the default list
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId()!) // Remove explicit type, let TS infer
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
