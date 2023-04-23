import express from 'express'
import featureCategoryController from '../controllers/featureCategory.controller.js'
import { verifyJWTAdmin } from './commonMiddleware/verifyJwtAdmin.js'

export const featureCategoryRoute = express.Router()

featureCategoryRoute.post('/', verifyJWTAdmin, featureCategoryController.post)
featureCategoryRoute.get('/', verifyJWTAdmin, featureCategoryController.getAll)
featureCategoryRoute.get('/:name', verifyJWTAdmin, featureCategoryController.get)

featureCategoryRoute.use((err, req, res, next) => {
	res.status(400).send({ error: err.message })
})