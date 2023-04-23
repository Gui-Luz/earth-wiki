import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { logger } from './utils/logger/logger.js'
import { usersRoute } from './routes/users.route.js'
import { authRouter } from './routes/auth.route.js'
import { featureCategoryRoute } from './routes/featureCategory.route.js'
import { featureItemRoute } from './routes/featureItem.route.js'
import { ruleRoute } from './routes/rule.route.js'
import { swaggerDocument } from './documentation/swagger.documentation.js'
import { scoreRoute } from './routes/score.route.js'

const app = express()

app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/users', usersRoute)
app.use('/auth', authRouter)
app.use('/featureCategory', featureCategoryRoute)
app.use('/featureItem', featureItemRoute)
app.use('/rule', ruleRoute)
app.use('/score', scoreRoute)

app.listen(3000, () => {
  try {
    logger.info(`${new Date().toISOString()} API listening on port 3000`)
  } catch(err) {
    logger.warning(err)
  } 
})
