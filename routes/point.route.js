import express from 'express'
import pointController from '../controllers/point.controller.js'
import { verifyJWTAdmin } from './commonMiddleware.js/verifyJwtAdmin.js'

export const pointRoute = express.Router()

pointRoute.post('/', verifyJWTAdmin, pointController.post)

pointRoute.use((err, req, res, next) => {
	res.status(400).send({ error: err.message })
})