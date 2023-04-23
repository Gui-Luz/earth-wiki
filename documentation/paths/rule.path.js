export const rulePath = {
    'post': {
        'summary': 'Create a new game rule',
        'tags': ['Rule'],
        'requestBody': {
          'required': true,
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Rule'
              }
            }
          }
        },
        'responses': {
          '201': {
            'description': 'Rule created',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Rule'
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