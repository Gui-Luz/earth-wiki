export const featureCategoryPath = {
    'post': {
        'summary': 'Create a feature category',
        'tags': ['featureCategory'],
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
      }
}