import express from 'express'
import scoreController from '../controllers/score.controller.js'
import { verifyJWT } from './commonMiddleware/verifyJwt.js'

export const scoreRoute = express.Router()

scoreRoute.post('/', verifyJWT, scoreController.post)

scoreRoute.use((err, req, res, next) => {
	res.status(400).send({ error: err.message })
})