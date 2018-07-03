import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import * as chaiAsPromised from 'chai-as-promised'
import chaiHttp = require('chai-http')
import { use, expect, request } from 'chai'
use(sinonChai)
use(chaiAsPromised)
use(chaiHttp)

import * as model from '#lib/model'
import * as service from '#lib/service'

import app from '#app'

describe('#app', () => {
  const sandbox = sinon.sandbox.create()

  let _allPersons
  let _getById

  beforeEach(() => {
    _allPersons = sandbox.stub(service, 'allPersons')
    _getById = sandbox.stub(service, 'getById')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('GET /persons', () => {
    it('returns all persons with a response of 200', () => {
      _allPersons.resolves([
        new model.Person(1, 'John', 'Doe'),
        new model.Person(2, 'Jane', 'Doe')
      ])

      return request(app).get('/persons')
        .then((res) => {
          expect(res.status).to.be.equal(200)

          expect(res.body.length).to.be.equal(2)

          expect(res.body[0].id).to.be.equal(1)
          expect(res.body[0].firstName).to.be.equal('John')
          expect(res.body[0].lastName).to.be.equal('Doe')

          expect(res.body[1].id).to.be.equal(2)
          expect(res.body[1].firstName).to.be.equal('Jane')
          expect(res.body[1].lastName).to.be.equal('Doe')
        })
    })
  })

  describe('GET /persons/:id', () => {
    it('returns a person  given an id', () => {
      _getById.withArgs(1).resolves(new model.Person(1, 'John', 'Doe'))

      return request(app).get('/persons/1')
        .then((res) => {
          expect(res.status).to.be.equal(200)

          expect(res.body.id).to.be.equal(1)
          expect(res.body.firstName).to.be.equal('John')
          expect(res.body.lastName).to.be.equal('Doe')
        })
    })

    it('returns a 404 if an id does not match any person', () => {
      _getById.withArgs(2).resolves(null)

      return request(app).get('/persons/1')
        .then((res) => { expect(res.status).to.be.equal(404) })
    })
  })

})
