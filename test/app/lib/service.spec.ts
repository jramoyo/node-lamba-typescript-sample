import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import * as chaiAsPromised from 'chai-as-promised'
import { use, expect } from 'chai'
use(sinonChai)
use(chaiAsPromised)

import * as model from '#lib/model'
import * as repository from '#lib/repository'

import * as service from '#lib/service'

describe('#lib#service', () => {
  let _loadName

  beforeEach(() => {
    // stub the loadName function
    _loadName = sinon.stub(repository, 'loadName')
  })

  afterEach(() => {
    // restore the stubbed function
    // this is required because we have
    // a static reference to the function
    _loadName.restore()
  })

  describe('#getGreeting', () => {
    it('returns a greeting for the name returned by the repository (1)', () => {
      // configure the stubed method to return
      // a resolved promise with a specified value
      _loadName.resolves({ firstName: 'Jane', lastName: 'Doe' } as model.Name)
      return service.getGreeting()
        .then((greeting) => {
          expect(greeting).to.be.equal('Hello Jane Doe!')
        })
    })

    it('returns a greeting for the name returned by the repository (2)', () => {
      _loadName.resolves({ firstName: 'John', lastName: 'Smith' } as model.Name)
      return service.getGreeting()
        .then((greeting) => {
          expect(greeting).to.be.equal('Hello John Smith!')
        })
    })
  })
})
