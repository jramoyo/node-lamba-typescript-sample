import * as express from 'express'

import * as service from './service'

const router: express.Router = express.Router()

router.get('/persons', async (req, res) => {
  const persons = await service.allPersons()
  res.json(persons)
})

router.get('/persons/:id', async (req, res) => {
  const person = await service.getById(parseInt(req.params.id, 10))
  if (person) {
    res.json(person)
  } else {
    res.sendStatus(404)
  }
})

export default router
