<<<<<<< HEAD
export function createTimeout (seconds, string) {
// Ex 5-1.1. IMPLEMENT HERE. Add parameters as necessary
  setTimeout(seconds)
  console.log(`${string}: ${setTimeout(seconds)}.`)
=======

export function createTimeout (time, string) {
// Ex 5-1.1. IMPLEMENT HERE. Add parameters as necessary
  time = time * 1000
  const timerDone = () => { console.log(`${string}`) }
  return setTimeout(timerDone, time)
>>>>>>> 7863984e5889e3ba694f554e945fa4a83754b255
}
export function createInterval (time, func) {
// Ex 5-1.2. IMPLEMENT HERE. Add parameters as necessary
  time = time * 1000
  return setInterval(func, time)
}
