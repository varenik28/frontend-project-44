import sayHello from '../cli.js'
import runGame from '../index.js'
import { getRandomIntInclusive } from '../random-numbers.js'
import getResult from '../result.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGameData = () => {
  let firstNum = getRandomIntInclusive()
  let secondNum = getRandomIntInclusive()

  const question = `${firstNum} ${secondNum}`

  while (secondNum !== 0) {
    const a = firstNum
    firstNum = secondNum
    secondNum = a % secondNum
  }

  const answer = String(firstNum)

  return { question: question, answer: answer }
}

export const runBrainGCD = () => {
  const name = sayHello()
  const result = runGame(description, getGameData)
  getResult(result, name)
}
