export default {
    name: 'dog',
    title: 'Dog',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'age',
            title: 'Age',
            type: 'number',
            validation: (Rule: { required: () => any; }) => Rule.required()
        },
        {
            name: 'breed',
            title: 'Breed',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required()
        }
    ],
}
