import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { logger } from './utils/logger/logger.js'
import { usersRoute } from './routes/users.route.js'
import { authRouter } from './routes/auth.route.js'
import { swaggerDocument } from './documentation/swagger.documentation.js'

const app = express()

app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/users', usersRoute)
app.use('/auth', authRouter)

app.listen(3000, () => {
  if (process.env.JWT_SECRET) {
    logger.info(`${new Date().toISOString()} API listening on port 3000`)
  } else {
    console.log('JWT_SECRET is not defined.')
    process.exit()
  }
})
