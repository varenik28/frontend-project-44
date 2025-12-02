import sayHello from '../cli.js'
import runGame from '../index.js'
import { getRandomIntInclusive } from '../random-numbers.js'
import getResult from '../result.js'

const description = 'What is the result of the expression?'

const getRandomMathSign = () => {
  const mathSigns = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * mathSigns.length)
  return mathSigns[randomIndex]
}

const getGameData = () => {
  const firstNum = getRandomIntInclusive()
  const secondNum = getRandomIntInclusive()
  const mathSign = getRandomMathSign()

  const question = `${firstNum} ${mathSign} ${secondNum}`
  let answer = ''

  switch (mathSign) {
    case '+':
      answer = firstNum + secondNum
      break
    case '-':
      answer = firstNum - secondNum
      break
    case '*':
      answer = firstNum * secondNum
      break
  }

  return { question: question, answer: String(answer) }
}

export const runBrainCalc = () => {
  const name = sayHello()
  const result = runGame(description, getGameData)
  getResult(result, name)
}
