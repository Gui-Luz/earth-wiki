import express from 'express'
import jwt from 'jsonwebtoken'
import featureItemController from '../controllers/featureItem.controller.js'

export const featureItemRoute = express.Router()

const privatekey = process.env.JWT_SECRET

featureItemRoute.post('/', verifyJWT, featureItemController.post)

function verifyJWT (req, res, next) {
	const token = req.headers.authorization.split(' ')[1]
	const decodedToken = jwt.verify(token, privatekey)
	req.user = decodedToken
	next()
};

featureItemRoute.use((err, req, res, next) => {
	res.status(400).send({ error: err.message })
})