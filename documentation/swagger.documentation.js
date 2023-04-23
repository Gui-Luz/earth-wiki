import { auth } from "./paths/auth.path.js";
import { users } from "./paths/users.path.js";
import { usersId } from "./paths/users.id.path.js";
import { User } from "./schemas/user.schemas.js";
import { basicAuth } from "./securitySchemes/basicAuth.securitySchemes.js";
import { bearerAuth } from "./securitySchemes/bearerAuth.securitySchemes.js";
import { featureCategorySchema } from "./schemas/featureCategory.schema.js";
import { featureCategoryPath } from "./paths/featureCategory.path.js";
import { featureItemSchema } from "./schemas/featureItem.schema.js";
import { featureItemPath } from "./paths/featureItem.path.js";
import { pointPath } from "./paths/point.path.js";
import { pointSchema } from "./schemas/point.schema.js";
import { scoreSchema } from "./schemas/score.schema.js";
import { scorePath } from "./paths/score.path.js"

export const swaggerDocument =
{
    'openapi': '3.0.2',
    'info': {
      'title': 'Earth Wiki Api',
      'version': '1.0.0',
      'description': '',
      'contact': {
        'url': 'https://github.com/Gui-Luz/earth-wiki'
      },
      'tags': [
        {
          'name': 'Users',
          'description': 'Endpoints related to users'
        },
        {
          'name': 'Auth',
          'description': 'Basic authorization endpoint'
        },
        {
          'name': 'Feature Category',
          'description': 'Feature Category endpoint'
        },
        {
          'name': 'Feature Item',
          'description': 'Feature Item endpoint'
        },
        {
          'name': 'Point',
          'description': 'Point endpoint'
        },
        {
          'name': 'Score',
          'description': 'Score endpoint'
        }
      ],
    },
    'servers': [
      {
        'url': 'http://localhost:3000',
        'description': 'Development server'
      }
    ],
    'paths': {
      '/auth': auth,
      '/users': users,
      '/users/{id}': usersId,
      '/featureCategory': featureCategoryPath,
      '/featureItem': featureItemPath,
      '/point': pointPath,
      '/score': scorePath
    },
    'components': {
        'schemas': {
            'User': User,
            'Feature Category': featureCategorySchema,
            'Feature Item': featureItemSchema,
            'Point': pointSchema,
            'Score': scoreSchema
        },
        'securitySchemes': {
          'BasicAuth': basicAuth,
          'BearerAuth': bearerAuth,
        }
    }
}