import jwt from "jsonwebtoken";

const privatekey = process.env.JWT_SECRET

async function auth(req, res, next) {
    try {
        const payload = {
            "id": req.user.id,
            "username": req.user.username,
            "firs_name": req.user.first_name,
            "last_name": req.user.last_name,
            "email": req.user.email,
            "role": req.user.role
        }
        var token = jwt.sign(payload, privatekey)
        res.send({
            token: token
        })
    } catch(err) {
        next(err)
    }
}

export default {
    auth
}