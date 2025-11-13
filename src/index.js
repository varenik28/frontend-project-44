import readlineSync from 'readline-sync'

const runGame = (description, getQuestion, getRightAnswer) => {
  console.log(description)
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion()
    console.log(`Question: ${question}`)
    const yourAnswer = readlineSync.question('Your answer: ')
    const rightAnswer = getRightAnswer(question)
    switch (yourAnswer) {
      case rightAnswer:
        console.log('Correct!')
        break
      default:
        return { result: false, message: `'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.` }
    }
  }

  return { result: true }
}

export default runGame
