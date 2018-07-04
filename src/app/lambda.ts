import * as serverless from 'aws-serverless-express'

import app from './app'

const server = serverless.createServer(app)

export const handler = (event, context) => serverless.proxy(server, event, context)
