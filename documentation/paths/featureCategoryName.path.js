export const featureCategoryName = {
    'get': {
      'summary': 'Get a feature category by category name',
      'tags': ['Feature Category'],
      'parameters': [
        {
          'in': 'path',
          'name': 'name',
          'required': true,
          'schema': {
            'type': 'string'
          }
        }
      ],
      'responses': {
        '200': {
          'description': 'Successful response',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Feature Category'
              }
            }
          }
        },
        '404': {
          'description': 'Feature category not found'
        },
      },
      'security': [
        {
          'BearerAuth': []
        }
      ],
    },
}