import * as model from './model'
import * as repository from './repository'

export const getGreeting = async (): Promise<String> => {
  const name = await repository.loadName()
  return Promise.resolve(`Hello ${name.firstName} ${name.lastName}!`)
}
