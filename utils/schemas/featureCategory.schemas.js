import Joi from 'joi'

const featureCategorySchema = Joi.object({
    id: Joi.number().integer(),
    name: Joi.string().required(),
    creationUserId: Joi.number().integer(),
})

export default {
    featureCategorySchema
}