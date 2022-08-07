export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'url',
            title: 'Url',
            type: 'string',
        },
        {
            name: 'source',
            title: 'Source',
            type: 'string',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}]
        }
    ]
}