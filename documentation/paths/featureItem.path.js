export const featureItemPath = {
  'get': {
    'summary': 'Get feature items',
    'tags': ['Feature Item'],
    'parameters': [
      {
        'in': 'query',
        'name': 'featureCategoryId',
        'required': false,
        'schema': {
          'type': 'integer',
        'example': 1
        }
      }
    ],
    'responses': {
      '200': {
        'description': 'Successful response',
        'content': {
          'application/json': {
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/components/schemas/Feature Item'
              }
            }
          }
        }
      }
    },
    'security': [
      {
        'BearerAuth': []
      }
    ],
  },
  'post': {
      'summary': 'Create a feature category',
      'tags': ['Feature Item'],
      'requestBody': {
        'required': true,
        'content': {
          'application/json': {
            'schema': {
              '$ref': '#/components/schemas/Feature Item'
            }
          }
        }
      },
      'responses': {
        '200': {
          'description': 'Feature item created',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Feature Item'
              }
            }
          }
        }
      },
      'security': [
        {
          'BearerAuth': []
        }
      ],
    }
}