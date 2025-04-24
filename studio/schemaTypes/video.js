export default {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().min(3)
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
        title: 'Video File',
        type: 'file',
        options: {
          accept: 'video/*'
        }
      }
    ]
  }
  