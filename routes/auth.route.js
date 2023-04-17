import express from "express";
import authController from "../controllers/auth.controller.js";
import pg from "../repository/user.repository.js";
import bcrypt from "bcrypt";
import { hasher } from "../utils/hasher/hasher.js";

export const authRouter = express.Router();

async function checkPassword(req, res, next){
    try {
        const base64 = req.headers.authorization.split('Basic ')[1]
        const decodedString = Buffer.from(base64, 'base64').toString('utf-8');
        const username = decodedString.split(':')[0]
        const password = decodedString.split(':')[1]

        const hashedPassword = await hasher(password)
        const user  = await pg.getUserByUsername(username)

        if (user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if (err) {
                  console.log('Error:', err);
                } else if (result) {
                    req.user = user
                  next()
                } else {
                    res.status(401).send('Permission denied')
                }
              });
        } else {
            res.status(401).send('Permission denied')
        }
    } catch(err) {
        next(err)
    }
}

authRouter.post('/',  checkPassword, authController.auth);