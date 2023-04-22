export const featureItemSchema = {
    'type': 'object',
    'properties': {
        'featureCategoryId': {
          'type': 'integer',
          'example': 1
        },
        'geom': 
        {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      [
                        30,
                        10
                      ],
                      [
                        40,
                        40
                      ],
                      [
                        20,
                        40
                      ],
                      [
                        10,
                        20
                      ],
                      [
                        30,
                        10
                      ]
                    ]
                  ]
                }
              }
            ]
          }
    }
}