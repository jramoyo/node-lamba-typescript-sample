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
  const sandbox = sinon.sandbox.create()

  let _allPersons
  let _getById

  beforeEach(() => {
    _allPersons = sandbox.stub(repository, 'allPersons')
    _getById = sandbox.stub(repository, 'getById')
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#allPersons', () => {
    it('fetches all persons from the repository', () => {
      _allPersons.resolves([
        new model.Person(1, 'John', 'Doe'),
        new model.Person(2, 'Jane', 'Doe')
      ])

      return service.allPersons().then((persons) => {
        expect(persons.length).to.be.equal(2)

        expect(persons[0].id).to.be.equal(1)
        expect(persons[0].firstName).to.be.equal('John')
        expect(persons[0].lastName).to.be.equal('Doe')

        expect(persons[1].id).to.be.equal(2)
        expect(persons[1].firstName).to.be.equal('Jane')
        expect(persons[1].lastName).to.be.equal('Doe')
      })
    })
  })

  describe('#getById', () => {
    it('returns a person from the repository given an id', () => {
      _getById.withArgs(1).resolves(new model.Person(1, 'John', 'Doe'))

      return service.getById(1).then((person) => {
        expect(person.id).to.be.equal(1)
        expect(person.firstName).to.be.equal('John')
        expect(person.lastName).to.be.equal('Doe')
      })
    })

    it('returns null if the repository returns null given an id', () => {
      _getById.withArgs(2).resolves(null)

      return service.getById(2).then((person) => {
        expect(person).to.be.null
      })
    })
  })

})
