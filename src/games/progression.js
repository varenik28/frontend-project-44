import sayHello from '../cli.js'
import runGame from '../index.js'
import { getRandomIntInclusive } from './even.js'
import getResult from '../result.js'

const description = 'What number is missing in the progression?'

const getGameData = () => {
  const progression = []

  const start = getRandomIntInclusive()
  const length = getRandomIntInclusive(5, 10)
  const step = getRandomIntInclusive(1, 10)

  for (let i = 0; i < length; i += 1) {
    const currentElement = start + i * step
    progression.push(currentElement)
  }

  const hideIndex = getRandomIntInclusive(0, length - 1)
  const answer = String(progression[hideIndex])
  progression[hideIndex] = '..'
  const question = progression.join(' ')

  return { question: question, answer: answer }
}

export const runBrainProgression = () => {
  const name = sayHello()
  const result = runGame(description, getGameData)
  getResult(result, name)
}
