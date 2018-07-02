import * as model from './model'

export const loadName = (): Promise<model.Name> => {
  const name = new model.Name()
  name.firstName = 'John'
  name.lastName = 'Doe'
  return Promise.resolve(name)
}
