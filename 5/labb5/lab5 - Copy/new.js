import fs from "fs"
import { resolve } from "path"
import readline from "readline"

// importing JSON files
const questions = JSON.parse(fs.readFileSync("./multipleChoice.json"))
const definitions = JSON.parse(fs.readFileSync("./definitions.json"))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let score = 0 // global variable

const question = (i) => { // Multiple choice function
  return new Promise((resolve, reject) => {
    rl.question(
`${questions[i].question}\n 
${questions[i].possibleAnswers.map(answer => (`${answer}\n`)).join("")}\n>`,
(answer, signal) => {
  if (answer === "q") {
    console.log(`Your score is ${score}/2`)
    console.log("Exiting program..!")
    process.exit()
  } else if (parseInt(answer) === questions[i].correctAnswer) {
    console.log("CORRECT!")
    score++
  } else if (parseInt(answer) !== questions[i].correctAnswer && (answer >= 1 && answer <= 4)) { // valid incorrect answer
    console.log("WRONG!")
  } else if (parseInt(answer) !== questions[i].correctAnswer) { // invalid answer
    console.log("Invalid answer!")
    question(i) // Redos the question
  }
  resolve()
})
  })
}
// Creating the rngs
function randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const definition = (i) => { // definition function
  return new Promise((resolve, reject) => {
    rl.question(
`${definitions[i].definition}\n 
${definitions[i].possibleTerms.map(answer => (`${answer}\n`)).join("")}\n>`,
(answer) => {
  while (definitions.length !== 0) { // does this until the array has no more items within it
    if (parseInt(answer) === definitions[i].correctDefinition) {
      console.log("CORRECT!")
      definitions.splice(i, 1) // gets rid of the defintion from the array
      console.log(definitions)
      score++
      resolve()
    } else if (parseInt(answer) !== definitions[i].correctDefinition) {
      console.log("WRONG!")
      resolve()
    }
    resolve()
  }
})
  })
}

// main program
export const main = async () => {
  rl.question(`Study App

    Modes:
    1. Multiple Choice
    2. Vocabulary Drill
    3. Exit
    
     > `, async (answer) => {
    if (answer === "1") {
      for (let i = 0; i < questions.length; i++) {
        await question(i)
      } // After the for loop you will be given the score v
      console.log(`Your score is ${score}/2`)
      score = 0 // reseting the score
      main() // returning to the main menu
    } else if (answer === "2") {
      while (definitions.length !== 0) {
        const i = randomIntFromInterval(0, definition.length - 1)
        await definition(i)
      }
      console.log(`Your score is ${score}/2`)
      score = 0 // reseting the score
      main() // returning to the main menu
    } else if (answer === "3") {
      console.log("Thanks for playing!")
      resolve()
    }
  }
  )
}

main()

// const answers = questions[i].possibleAnswers.map(answer =>(`${answer}\n`)).join("")
