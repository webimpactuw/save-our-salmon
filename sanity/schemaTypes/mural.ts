import {defineType, defineField, defineArrayMember} from 'sanity'

export const mural = defineType({
  type: 'document',
  name: 'mural',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      type: 'image',
      name: 'cover',
    }),
    defineField({
      type: 'images',
      name: 'images',
    }),
    defineField({
      type: 'sponsors',
      name: 'sponsors',
    }),
  ],
})
