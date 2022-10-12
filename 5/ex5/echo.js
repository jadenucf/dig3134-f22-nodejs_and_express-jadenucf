
import crypto from "../ex5.test"

const testString = "Test string " + crypto.randomInt(1000)
process.stdout.write(testString)
