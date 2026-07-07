import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: 'vX'})
const EVENT_QUERY = `*[_type == "event" && !defined(details)][0]._id`

async function run() {
  const eventId = await client.fetch(EVENT_QUERY)

  console.log({eventId})
}

run()