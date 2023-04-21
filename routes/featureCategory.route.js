import express from 'express'
import jwt from 'jsonwebtoken'
import featureCategoryController from '../controllers/featureCategory.controller.js'

export const featureCategoryRoute = express.Router()

const privatekey = process.env.JWT_SECRET

featureCategoryRoute.post('/', verifyJWT, featureCategoryController.post)

function verifyJWT (req, res, next) {
	const token = req.headers.authorization.split(' ')[1]
	const decodedToken = jwt.verify(token, privatekey)
	req.user = decodedToken
	next()
};

featureCategoryRoute.use((err, req, res, next) => {
	res.status(400).send({ error: err.message })
})