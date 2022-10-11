// import { fileURLToPath } from "url"
// import { dirname } from "path"

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

export function createTimeout (time, string) {
// Ex 5-1.1. IMPLEMENT HERE. Add parameters as necessary
  time = time * 1000
  const timerDone = () => { console.log(`${string}`) }
  return setTimeout(timerDone, time)
}
export function createInterval (time, func) {
// Ex 5-1.2. IMPLEMENT HERE. Add parameters as necessary
  time = time * 1000
  return setInterval(func, time)
}
