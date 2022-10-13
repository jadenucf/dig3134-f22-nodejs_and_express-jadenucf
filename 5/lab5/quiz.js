import questions from './multipleChoice.json' assert {type: 'json'};
import definitions from './definitions.json' assert {type: 'json'};
import readline from "readline"
//console.log(questions.question)

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
      let i = 0;
      rl.setPrompt(`${questions[i].question}\n`) // question is set
      rl.prompt(); // question is executed
      rl.on('line',(answer)=>{ // this is where you answer
        if (answer == questions[i].correctAnswer){
          rl.close();
          i++
          prompt()
        }
        else
          console.log("WRONG!")
      })
    } else if (answer === "2") {
      rl.setPrompt(definitions)
      process.exit()
    } else {
      console.log("Idk")
    }
  })
}
const answers = []
rl.on("close", ()=>{
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
