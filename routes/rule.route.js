import express from 'express'
import pointController from '../controllers/rule.controller.js'
import { verifyJWTAdmin } from './commonMiddleware/verifyJwtAdmin.js'

export const ruleRoute = express.Router()

ruleRoute.post('/', verifyJWTAdmin, pointController.post)

ruleRoute.use((err, req, res, next) => {
	res.status(400).send({ error: err.message })
})