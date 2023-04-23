import schemas from '../utils/schemas/point.schemas.js';
import pointService from '../services/rule.service.js';


async function post (req, res, next) {
    try {
        const { error, value } = schemas.pointSchema.validate({
            action: req.body.action,
            point: req.body.point,
        })
        if (!error) {
            const { id } = await pointService.post(req.body)
            res.status(200).json({ message: 'Rule created' })
        } else {
            res.status(400).json({ error: error.details[0].message, id })
        }
    } catch (err) {
      next(err)
    }
}

export default { 
    post 
}