export const pointSchema = {
    'type': 'object',
    'properties': {
        'action': {
          'type': 'string',
          'example': 'Add new feature'
        },
        'point': {
          'type': 'integer',
          'example': 10
        }
    }
}