import { randomInt } from "crypto"

const testString = "Test string " + randomInt(1000)

process.stdout.write(testString)
