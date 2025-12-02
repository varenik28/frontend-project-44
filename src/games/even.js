import sayHello from '../cli.js'
import runGame from '../index.js'
import { getRandomIntInclusive } from '../random-numbers.js'
import getResult from '../result.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getGameData = () => {
  const question = getRandomIntInclusive()
  const answer = question % 2 === 0 ? 'yes' : 'no'

  return { question: question, answer: answer }
}

export const runBrainEven = () => {
  const name = sayHello()
  const result = runGame(description, getGameData)
  getResult(result, name)
}
