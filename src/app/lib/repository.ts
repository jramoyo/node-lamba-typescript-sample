import * as model from './model'

const persons = [
  new model.Person(1, 'John', 'Doe'),
  new model.Person(2, 'Jane', 'Doe'),
  new model.Person(3, 'John', 'Smith'),
  new model.Person(4, 'Jane', 'Smith')
]

export const allPersons = (): Promise<model.Person[]> => {
  return Promise.resolve(persons);
}

export const getById = (id: number): Promise<model.Person> => {
  return Promise.resolve(persons.find(person => person.id === id))
}
