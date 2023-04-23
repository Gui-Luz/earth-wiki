import Joi from 'joi'

const scoreSchema = Joi.object({
  id: Joi.number().integer(),
  userId: Joi.number().integer().required(),
  ruleId: Joi.number().integer().required(),
  featureId: Joi.number().integer().required()
})

export default {
    scoreSchema
}