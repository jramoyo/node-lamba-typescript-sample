import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import * as chaiAsPromised from 'chai-as-promised'
import chaiHttp = require('chai-http')
import { use, expect, request } from 'chai'
use(sinonChai)
use(chaiAsPromised)
use(chaiHttp)

import app from '#app'

describe('#app', () => {
  describe('GET /greeting', () => {
    it('returns the greeting as a 200 response', () => {
      return request(app).get('/greeting')
        .then((res) => {
          expect(res.status).to.be.equal(200)
          expect(res.body.greeting).to.be.equal('Hello John Doe!')
        })
    })
  })
})
