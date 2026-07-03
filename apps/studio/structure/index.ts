import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.divider().title( 'Events'),
      S.listItem().title( 'Upcoming').schemaType('event').child(S.documentList().title('Upcoming events').filter( 'date >= now()')),
      S.listItem().title( 'Past').schemaType('event').child(S.documentList().title('Past events').filter( 'date <= now()')),
      S.divider().title( 'Artists and venues'),
      S.documentTypeListItem('artist').title('Artists'),
      S.documentTypeListItem('venue').title('Venues'),
    ])