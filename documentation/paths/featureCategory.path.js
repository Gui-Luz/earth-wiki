export const featureCategoryPath = {
  'get': {
    'summary': 'Get all feature categories',
    'tags': ['Feature Category'],
    'responses': {
      '200': {
        'description': 'Successful response',
        'content': {
          'application/json': {
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/components/schemas/Feature Category'
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
        'tags': ['Feature Category'],
        'requestBody': {
          'required': true,
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Feature Category'
              }
            }
          }
        },
        'responses': {
          '201': {
            'description': 'User created',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Feature Category'
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