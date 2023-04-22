import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { logger } from './utils/logger/logger.js'
import { usersRoute } from './routes/users.route.js'
import { authRouter } from './routes/auth.route.js'
import { featureCategoryRoute } from './routes/featureCategory.route.js'
import { featureItemRoute } from './routes/featureItem.route.js'
import { pointRoute } from './routes/point.route.js'
import { swaggerDocument } from './documentation/swagger.documentation.js'
import db from './repository/db.js'

const app = express()

app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/users', usersRoute)
app.use('/auth', authRouter)
app.use('/featureCategory', featureCategoryRoute)
app.use('/featureItem', featureItemRoute)
app.use('/point', pointRoute)

app.listen(3000, () => {
  if (process.env.JWT_SECRET) {
    logger.info(`${new Date().toISOString()} API listening on port 3000`)
    // db.sync({ force: true })
    //   .then(() => console.log('User table synchronized'))
    //   .catch((error) => console.error('Error synchronizing user table:', error));
  } else {
    logger.info('JWT_SECRET is not defined.')
    process.exit()
  }
})
