import schemas from '../utils/schemas/score.schemas.js';
import scoreService from '../services/score.service.js';


async function post (req, res, next) {
    try {
        const { error, value } = schemas.scoreSchema.validate({
            userId: req.body.userId,
            pointId: req.body.pointId,
            featureId: req.body.featureId
        })
        if (!error) {
            await scoreService.post(req.body)
            res.status(200).json({ message: 'New point added to scoreboard' })
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