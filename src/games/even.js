import sayHello from '../cli.js'
import runGame from '../index.js'
import getResult from '../result.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

export const getRandomIntInclusive = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const isEven = (num) => {
  return num % 2 === 0 ? 'yes' : 'no'
}

export const runBrainEven = () => {
  const name = sayHello()
  const result = runGame(description, getRandomIntInclusive, isEven)
  return getResult(result, name)
}
