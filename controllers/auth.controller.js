/* eslint-disable no-tabs */
import jwt from 'jsonwebtoken'

const privatekey = process.env.JWT_SECRET

async function auth(req, res, next) {
  try {
    const payload = {
      id: req.user.id,
      username: req.user.username,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      role: req.user.role,
    }
    const token = jwt.sign(payload, privatekey)
    res.send({
      token: token,
      user: payload,
    })
  } catch (err) {
    next(err)
  }
}

export default {
  auth,
}
