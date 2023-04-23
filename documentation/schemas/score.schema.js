export const scoreSchema = {
    'type': 'object',
    'properties': {
        'userId': {
          'type': 'integer',
          'example': 1
        },
        'ruleId': {
          'type': 'integer',
          'example': 1
        },
        'featureId': {
            'type': 'integer',
            'example': 1
          }
    }
}