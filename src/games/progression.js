import sayHello from '../cli.js'
import runGame from '../index.js'
import { getRandomIntInclusive } from './even.js'
import getResult from '../result.js'

const description = 'What number is missing in the progression?'

const getProgression = () => {
  const progression = []
  const start = getRandomIntInclusive()
  const lastIndex = getRandomIntInclusive(5, 10)
  const step = getRandomIntInclusive(1, 10)

  for (let i = 0; i < lastIndex; i += 1) {
    const currentElement = start + i * step
    progression.push(currentElement)
  }

  const hideIndex = getRandomIntInclusive(0, lastIndex - 1)
  progression[hideIndex] = '..'

  return progression.join(' ')
}

const findMissingNum = (progressionStr) => {
  const progression = progressionStr.split(' ')
  const numIndex = progression.indexOf('..')
  let missingNum = 0
  let step = 0

  if (numIndex === 0) {
    step += Number(progression[numIndex + 2]) - Number(progression[numIndex + 1])
    missingNum += Number(progression[numIndex + 1]) - step
  }
  else if (numIndex === progression.length - 1) {
    step += Number(progression[numIndex - 1]) - Number(progression[numIndex - 2])
    missingNum += Number(progression[numIndex - 1]) + step
  }
  else {
    step += (Number(progression[numIndex + 1]) - Number(progression[numIndex - 1])) / 2
    missingNum += Number(progression[numIndex + 1]) - step
  }

  return String(missingNum)
}

export const runBrainProgression = () => {
  const name = sayHello()
  const result = runGame(description, getProgression, findMissingNum)
  getResult(result, name)
}
