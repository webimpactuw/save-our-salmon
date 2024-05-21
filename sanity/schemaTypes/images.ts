import {defineType, defineField, defineArrayMember} from 'sanity'

export const images = defineType({
  type: 'object',
  name: 'images',
  title: 'Image List',
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
