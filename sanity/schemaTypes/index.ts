import { type SchemaTypeDefinition } from 'sanity'
import { blurb } from './blurb'
import { resume } from './resume'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blurb, resume],
}
