import schemas from '../utils/schemas/featureCategory.schemas.js';
import featureCategoryService from '../services/featureCategory.service.js';

async function post (req, res, next) {
    try {
        const { error, value } = schemas.featureCategorySchema.validate({
        name: req.body.name,
        creationUserId: req.body.creationUserId,
      })
      if (!error) {
        const { id } = await featureCategoryService.postFeatureCategory(req.body, req.user)
        res.status(200).json({ message: 'Feature category created', id })
      } else {
        res.status(400).json({ error: error.details[0].message })
      }
    } catch (err) {
      next(err)
    }
  };

  export default { 
    post 
}