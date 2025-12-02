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

const getExpression = () => {
  const firstNum = getRandomIntInclusive()
  const secondNum = getRandomIntInclusive()
  const mathSign = getRandomMathSign()
  switch (mathSign) {
    case '+':
      return `${firstNum} + ${secondNum}`
    case '-':
      return `${firstNum} - ${secondNum}`
    case '*':
      return `${firstNum} * ${secondNum}`
  }
}

const getExpressionResult = (expression) => {
  const [firstNumStr, mathSign, secondNumStr] = expression.split(' ')
  const firstNum = Number(firstNumStr)
  const secondNum = Number(secondNumStr)
  switch (mathSign) {
    case '+':
      return String(firstNum + secondNum)
    case '-':
      return String(firstNum - secondNum)
    case '*':
      return String(firstNum * secondNum)
  }
}

export const runBrainCalc = () => {
  const name = sayHello()
  const result = runGame(description, getExpression, getExpressionResult)
  getResult(result, name)
}
