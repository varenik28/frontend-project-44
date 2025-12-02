import sayHello from '../cli.js'
import runGame from '../index.js'
import { getRandomIntInclusive } from '../random-numbers.js'
import getResult from '../result.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getGameData = () => {
  const question = getRandomIntInclusive()

  if (question === 2) {
    return { question: question, answer: 'yes' }
  }

  if (question < 2 || question % 2 === 0) {
    return { question: question, answer: 'no' }
  }

  for (let i = Math.ceil(Math.sqrt(question)); i > 2; i -= 1) {
    if (question % i === 0) {
      return { question: question, answer: 'no' }
    }
  }

  return { question: question, answer: 'yes' }
}

export const runBrainPrime = () => {
  const name = sayHello()
  const result = runGame(description, getGameData)
  getResult(result, name)
}
