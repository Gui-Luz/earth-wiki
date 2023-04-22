import express from 'express'
import jwt from 'jsonwebtoken'
import pointController from '../controllers/point.controller.js'

export const pointRoute = express.Router()

const privatekey = process.env.JWT_SECRET

pointRoute.post('/', verifyJWT, pointController.post)

function verifyJWT (req, res, next) {
	const token = req.headers.authorization.split(' ')[1]
	const decodedToken = jwt.verify(token, privatekey)
	req.user = decodedToken
	next()
};

pointRoute.use((err, req, res, next) => {
	res.status(400).send({ error: err.message })
})