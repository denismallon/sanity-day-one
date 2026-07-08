import { documentEventHandler } from '@sanity/functions'
import { createClient } from '@sanity/client'

export const handler = documentEventHandler(async ({ context, event }) => {

  //const time = new Date().toLocaleTimeString()
  //console.log(`👋 Your Sanity Function was called at ${time}`)

  try {
    await createClient({
      ...context.clientOptions,
      useCdn: false,
      apiVersion: '2026-02-27',
    })
      .patch( event.data._id ).setIfMissing({
        firstPublished: new Date().toISOString(),
      })
      .commit( {dryRun:context.local})
    console.log( context.local ? 'Dry run:' : 'Updated:', `firstPublished set on ${event.data._id}`)
  } catch (error) {
    console.error( error )
  }

})