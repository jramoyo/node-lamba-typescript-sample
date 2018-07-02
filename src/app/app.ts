import * as express from 'express'
import * as serverless from 'aws-serverless-express/middleware'

import routes from './lib/routes'

const app: express.Express = express()
app.use(serverless.eventContext())
app.use('/', routes)

export default app
