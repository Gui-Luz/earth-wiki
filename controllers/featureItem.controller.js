import schemas from '../utils/schemas/featureItem.schemas.js';
import featureItemService from '../services/featureItem.service.js';


async function post (req, res, next) {
    try {
        const { error, value } = schemas.featureItemSchema.validate({
            featureCategoryId: req.body.featureCategoryId,
            creationUserId: req.body.creationUserId,
            geom: req.body.geom,
        })
        if (!error) {
            const { id } = await featureItemService.postFeatureItem(req.body, req.user)
            console.log
            res.status(200).json({ message: 'Feature item created', id })
        } else {
            res.status(400).json({ error: error.details[0].message })
        }
    } catch (err) {
      next(err)
    }
}

export default { 
    post 
}