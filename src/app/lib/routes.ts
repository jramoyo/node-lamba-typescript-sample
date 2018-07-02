import * as express from 'express'

import * as service from './service'

const router: express.Router = express.Router()

router.get('/greeting', async (req, res) => {
  const greeting = await service.getGreeting()
  res.json({ greeting })
})

export default router
