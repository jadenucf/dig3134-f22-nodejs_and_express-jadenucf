import questions from './multipleChoice.json' assert {type: 'json'};
import definitions from './definitions.json' assert {type: 'json'};
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (i) => { //Multiple choice function
    let x = 0;
    return new Promise((resolve, reject) => {
      rl.question(
`${questions[i].question}\n 
${questions[i].possibleAnswers.map(answer =>(`${answer}\n`)).join("")}\n>`,
  (answer) => {
          if (answer == questions[i].correctAnswer){
              console.log("CORRECT!")
          }else if (answer != questions[i].correctAnswer){
              console.log("WRONG!")
          } 
        resolve()
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
        if(answer === "1"){
            for (let i = 0; i < questions.length; i++){
                await question(i)
                
            }
            
        }
    }
)}


main()

//const answers = questions[i].possibleAnswers.map(answer =>(`${answer}\n`)).join("")