export const scorePath = {
    'post': {
        'summary': 'Create a new point in scoreboard',
        'tags': ['Score'],
        'requestBody': {
          'required': true,
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/Score'
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
                  '$ref': '#/components/schemas/Score'
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