export const pointPath = {
    'post': {
        'summary': 'Create a new point action',
        'tags': ['Points'],
        'requestBody': {
          'required': true,
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Point'
              }
            }
          }
        },
        'responses': {
          '201': {
            'description': 'Point created',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Point'
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