import express from 'express'
import jwt from 'jsonwebtoken'
import usersController from '../controllers/users.controller.js'

export const usersRoute = express.Router()

const privatekey = process.env.JWT_SECRET

usersRoute.use((req, res, next) => {
  next()
})

usersRoute.post('/', usersController.postUser)
usersRoute.get('/:id', verifyJWT, usersController.getUser)
usersRoute.delete('/:id', verifyJWT, usersController.deleteUser)
usersRoute.put('/:id', verifyJWT, usersController.putUser)
usersRoute.get('/', verifyJWT, usersController.getUsers)

function verifyJWT (req, res, next) {
  const token = req.headers.authorization.split(' ')[1]
  const decodedToken = jwt.verify(token, privatekey)
  req.user = decodedToken
  next()
};

usersRoute.use((err, req, res, next) => {
  res.status(400).send({ error: err.message })
})
