import readlineSync from 'readline-sync'

const runGame = (description, getGameData) => {
  console.log(description)

  for (let i = 0; i < 3; i += 1) {
    const game = getGameData()
    const question = game.question
    const rightAnswer = game.answer

    console.log(`Question: ${question}`)
    const yourAnswer = readlineSync.question('Your answer: ')

    if (yourAnswer === rightAnswer) {
      console.log('Correct!')
    }
    else {
      return { result: false, message: `'${yourAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.` }
    }
  }

  return { result: true }
}

export default runGame
