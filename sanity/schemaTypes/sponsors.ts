import {defineType, defineField, defineArrayMember} from 'sanity'

export const sponsors = defineType({
  type: 'object',
  name: 'sponsors',
  title: 'Sponsor List',
  fields: [
    defineField({
      type: 'array',
      name: 'images',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'caption',
            },
          ],
          options: {hotspot: true},
        }),
      ],
    }),
  ],
})
