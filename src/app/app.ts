import * as express from 'express'

import routes from './lib/routes'

const app: express.Express = express()
app.use('/', routes)

export default app
