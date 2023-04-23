import express from 'express'
import featureItemController from '../controllers/featureItem.controller.js'
import { verifyJWT } from './commonMiddleware.js/verifyJwt.js'

export const featureItemRoute = express.Router()

featureItemRoute.post('/', verifyJWT, featureItemController.post)

featureItemRoute.use((err, req, res, next) => {
	res.status(400).send({ error: err.message })
})