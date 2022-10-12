/**
 * @jest-environment node
 */
import fs, { accessSync } from "fs"
import path, { dirname, sep } from "path"
import { createTimeout, createInterval } from "./ex5"
import { jest } from "@jest/globals"
import { randomInt } from "crypto"
import { fileURLToPath } from "url"
import { spawn, spawnSync } from "child_process"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export const testString = "1"
function cleanTestDir () {
  const files = fs.readdirSync(path.resolve("testDir"))
  for (const file of files) {
    fs.unlinkSync(path.resolve(`testDir/${file}`))
  }
}

function execNodeProgram (prog, args, onStdOut, done) {
  const testAppFilePath = path.join(
    __dirname,
      `./ex5/${prog}`
  )
  try {
    fs.accessSync(testAppFilePath)
  } catch (error) {
    throw new Error("No program file found " + testAppFilePath)
  }
  if (done) {
    let finished = false
    const testApp = spawn("node", [testAppFilePath, ...args])
    testApp.stdout.on("data", data => {
      finished = true
      onStdOut(data.toString())
      testApp.kill("SIGINT")
      done()
    })
    if (testApp.finished) {
      onStdOut("")
      done()
    }
  } else {
    const output = spawnSync("node", [testAppFilePath, ...args])
    if (onStdOut) { onStdOut(output.stdout.toString()) }
  }
}

beforeAll(() => {
  try {
    fs.accessSync(path.resolve("testDir"))
  } catch (err) {
    fs.mkdirSync(path.resolve("testDir"))
  }
})
describe("5-1", () => {
  jest.useFakeTimers()
  jest.spyOn(global, "setTimeout")
  let log
  beforeEach(() => {
    log = jest.spyOn(console, "log").mockImplementation(() => {})
  })
  test("1. createTimeout", async () => {
    createTimeout(1)
    expect(log).toHaveBeenCalledTimes(0)
    jest.advanceTimersByTime(900)
    expect(log).toHaveBeenCalledTimes(0)
    jest.advanceTimersByTime(1000)
    expect(log).toHaveBeenCalledTimes(1)
  })
  test("2. createIntervalInterval", async () => {
    const fn = jest.fn()
    createInterval(1, fn)
    expect(fn).not.toHaveBeenCalled()
    jest.advanceTimersByTime(2000)
    expect(fn).toHaveBeenCalledTimes(2)
    jest.advanceTimersByTime(1000)
    expect(fn).toHaveBeenCalledTimes(3)
  })
})

describe("5-2", () => {
  beforeEach(() => {
    cleanTestDir()
  })
  // Call ex5/cat.js with a file argument.
  test("1. cat", done => {
    const fileName = "testDir/TestFile.txt"
    const file = path.resolve(fileName)
    fs.writeFileSync(file, "Testing 1 2 3")
    execNodeProgram("cat.js", [fileName], data => {
      expect(data).toMatch("Testing 1 2 3")
    }, done)
  })
  // Call ex5/cp.js with a file argument and test if file copied.
  test("2. cp", async () => {
    const randomText = "Testing 1 2 3" + Math.random()
    const file1 = "testDir/TestFile.txt"
    const file2 = "testDir/TestFile2.txt"
    fs.writeFileSync(path.resolve(file1), randomText)
    execNodeProgram("cp.js", [file1, file2])
    const out = fs.readFileSync(path.resolve(file2)).toString()
    expect(out).toMatch(randomText)
  })
  // Call ex5/echo.js with a string argument and test if as expected.
  test("3. echo", async () => {
    const testString = "1"
    execNodeProgram("echo.js", [testString], out => {
      expect(out).toMatch(`${testString}`)
    })
  })
  test("4. ls", async () => {
    // Create a directory with three files
    const file1 = randomInt(100)
    const file2 = randomInt(100)
    const file3 = randomInt(100)
    fs.writeFileSync(path.resolve(`testDir/${file1}`), "")
    fs.writeFileSync(path.resolve(`testDir/${file2}`), "")
    fs.writeFileSync(path.resolve(`testDir/${file3}`), "")
    // ls(["", "", "testDir"])
    let files = [file1, file2, file3]
    files = files.sort((a, b) => a.toString().localeCompare(b))
    execNodeProgram("ls.js", ["testDir"], out => {
      expect(out).toMatch(`${files.join(" ")}`)
    })
  })
  test("5. mv", async () => {
    const file1 = path.resolve(`testDir/${randomInt(100)}`)
    fs.writeFileSync(file1, "")
    const file2 = path.resolve(`testDir/${randomInt(100)}`)
    execNodeProgram("mv.js", [file1, file2])
    expect(() => {
      accessSync(file2)
    }).not.toThrowError()
  })
  test("6. touch", async () => {
    const file1 = path.resolve(`testDir/${randomInt(100)}`)
    execNodeProgram("touch.js", [file1])
    expect(() => {
      accessSync(file1)
    }).not.toThrowError()
  })
})
