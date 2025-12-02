import sayHello from '../cli.js'
import runGame from '../index.js'
import { getRandomIntInclusive } from '../random-numbers.js'
import getResult from '../result.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => {
  return num % 2 === 0 ? 'yes' : 'no'
}

export const runBrainEven = () => {
  const name = sayHello()
  const result = runGame(description, getRandomIntInclusive, isEven)
  return getResult(result, name)
}
