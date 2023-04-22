import Joi from 'joi'

const pointSchema = Joi.object({
  id: Joi.number().integer(),
  action: Joi.string().required(),
  point: Joi.number().integer().required(),
})

export default {
  pointSchema
}