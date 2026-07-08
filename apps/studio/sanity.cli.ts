import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig(
{
  api: {
    projectId: 'fs4f9eqj',
    dataset: 'production'
  },

  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },

  server: {
    port: 3334
  },

  typegen: {
      enabled: true,
      path: '../web/src/**/*.{ts,tsx,js,jsx}',
      schema: './schema.json',
      generates: '../web/src/sanity/types.ts'
  }
})