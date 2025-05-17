export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Event Title',
        type: 'string',
        validation: Rule => Rule.required().min(5)
      },
      {
        name: 'date',
        title: 'Event Date',
        type: 'datetime'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'videoFile',
        title: 'Event Video',
        type: 'file',
        options: {
          accept: 'video/*'
        }
      }
    ]
  }
  