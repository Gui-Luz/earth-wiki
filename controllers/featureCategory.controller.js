import featureCategoryService from '../services/featureCategory.service.js';
import schemas from '../utils/schemas/featureCategory.schemas.js';

async function post (req, res, next) {
  try {
      const { error, value } = schemas.featureCategorySchema.validate({
      name: req.body.name,
      creationUserId: req.body.creationUserId,
    })
    if (!error) {
      const { id } = await featureCategoryService.post(req.body, req.user)
      res.status(200).json({ message: 'Feature category created', id })
    } else {
      res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    next(err)
  }
};

async function get (req, res, next) {
  try {
      const { error, value } = schemas.featureCategorySchema.validate({
      name: req.params.name,
    })
    if (!error) {
      const featureCategory = await featureCategoryService.get(req.params)
      res.status(200).json(featureCategory)
    } else {
      res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    next(err)
  }
};

async function getAll (req, res, next) {
  try {
    const featureCategories = await featureCategoryService.getAll()
    res.status(200).json(featureCategories)
  } catch (err) {
    next(err)
  }
};

export default { 
  post,
  getAll,
  get
}