import readlineSync from 'readline-sync'

const getRandomIntInclusive = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const isEven = (num) => {
  return num % 2 === 0 ? 'yes' : 'no'
}

export const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomIntInclusive()
    console.log(`Question: ${number}`)
    const yourAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = isEven(number)
    if (yourAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
