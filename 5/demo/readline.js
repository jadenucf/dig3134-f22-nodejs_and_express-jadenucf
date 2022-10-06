import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
export async function program() {
  rl.question("Enter a number between 1-3, q to quit.\n> ", (answer) => {
    if (answer !== "q") {
      console.log(`You answered ${answer}`)
      program()
    }
  })
}

program()
