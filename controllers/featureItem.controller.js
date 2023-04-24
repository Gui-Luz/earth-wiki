import schemas from '../utils/schemas/featureItem.schemas.js';
import featureItemService from '../services/featureItem.service.js';

async function get (req, res, next) {
    try {
        if (req.query.length > 0) {
            const { error, value } = schemas.featureItemSchema.validate({
                featureCategoryId: req.query.featureCategoryId,
            })
            if (error) {
                res.status(400).json({ error: error.details[0].message })
            }
        }
        const results = await featureItemService.get(req.query)
        res.status(200).json({ results })
    } catch (err) {
      next(err)
    }
}

async function post (req, res, next) {
    try {
        const { error, value } = schemas.featureItemSchema.validate({
            featureCategoryId: req.body.featureCategoryId,
            creationUserId: req.body.creationUserId,
            geom: req.body.geom,
        })
        if (!error) {
            const { id } = await featureItemService.post(req.body, req.user)
            res.status(200).json({ message: 'Feature item created', id })
        } else {
            res.status(400).json({ error: error.details[0].message })
        }
    } catch (err) {
      next(err)
    }
}

export default { 
    post,
    get
}