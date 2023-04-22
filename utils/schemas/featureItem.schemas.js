import Joi from 'joi'

const featureItemSchema = Joi.object({
    id: Joi.number().integer(),
    featureCategoryId: Joi.number().integer().required(),
    creationUserId: Joi.number().integer(),
    geom: Joi.object()
})

export default {
    featureItemSchema
}