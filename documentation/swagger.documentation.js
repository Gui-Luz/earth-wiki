import { auth } from "./paths/auth.path.js";
import { users } from "./paths/users.path.js";
import { usersId } from "./paths/users.id.path.js";
import { User } from "./schemas/user.schemas.js";
import { basicAuth } from "./securitySchemes/basicAuth.securitySchemes.js";
import { bearerAuth } from "./securitySchemes/bearerAuth.securitySchemes.js";
import { featureCategorySchema } from "./schemas/featureCategory.schema.js";
import { featureCategoryPath } from "./paths/featureCategory.path.js";

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
          'name': 'featureCategory',
          'description': 'Feature Category endpoint'
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
      '/featureCategory': featureCategoryPath
    },
    'components': {
        'schemas': {
            'User': User,
            'Feature Category': featureCategorySchema
        },
        'securitySchemes': {
          'BasicAuth': basicAuth,
          'BearerAuth': bearerAuth,
        }
    }
}