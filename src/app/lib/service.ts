import * as model from './model'
import * as repository from './repository'

export const allPersons = (): Promise<model.Person[]> => {
  return repository.allPersons()
}

export const getById = (id: number): Promise<model.Person> => {
  return repository.getById(id)
}
