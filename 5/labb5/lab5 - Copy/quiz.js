
import fs from "fs"
// import { resolve } from "path"
import readline from "readline"

// importing JSON files
const questions = JSON.parse(fs.readFileSync("./multipleChoice.json"))
const definitions = JSON.parse(fs.readFileSync("./definitions.json"))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export async function program () {
  rl.question(`Study App

  Modes:
  1. Multiple Choice
  2. Vocabulary Drill
  3. Exit
  
  >  `, (answer) => {
    if (answer === "q") {
      console.log("Exiting program!")
      process.exit()
    } else if (answer === "1") {
      let i = 0
      rl.setPrompt(`${questions[i].question}\n`) // question is set
      rl.prompt() // question is executed
      rl.on("line", (answer) => { // this is where you answer
        if (parseInt(answer) === questions[i].correctAnswer) {
          rl.close()
          i++
          prompt()
        } else { console.log("WRONG!") }
      })
    } else if (answer === "2") {
      rl.setPrompt(definitions)
      process.exit()
    } else {
      console.log("Idk")
    }
  })
}

rl.on("close", () => {
  console.log("CORRECT!")
})
program()

/*
rl.on("close", data=>{
  console.log("CORRECT!")
  answers.push(data.toString().trim())

  if (answers.length < questions.length)
      console.log("ZOO WEE MAMA")
})
  */
