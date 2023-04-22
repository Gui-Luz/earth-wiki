export const featureItemPath = {
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