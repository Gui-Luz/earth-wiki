export const featureCategoryPath = {
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