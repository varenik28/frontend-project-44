import sayHello from '../cli.js'
import runGame from '../index.js'
import { getRandomIntInclusive } from './even.js'
import getResult from '../result.js'

const description = 'Find the greatest common divisor of given numbers.'

const getNumbers = () => {
  const firstNum = getRandomIntInclusive()
  const secondNum = getRandomIntInclusive()
  return `${firstNum} ${secondNum}`
}

const getGCD = (numbers) => {
  const [firstNumStr, secondNumStr] = numbers.split(' ')
  let firstNum = Number(firstNumStr)
  let secondNum = Number(secondNumStr)
  while (secondNum !== 0) {
    const a = firstNum
    firstNum = secondNum
    secondNum = a % secondNum
  }

  return String(firstNum)
}

export const runBrainGCD = () => {
  const name = sayHello()
  const result = runGame(description, getNumbers, getGCD)
  return getResult(result, name)
}
