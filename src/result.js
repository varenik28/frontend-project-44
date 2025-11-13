const getResult = (result, name) => {
  if (result.result) {
    console.log(`Congratulations, ${name}!`)
  }
  else {
    console.log(`${result.message}\nLet's try again, ${name}!`)
  }
}

export default getResult
