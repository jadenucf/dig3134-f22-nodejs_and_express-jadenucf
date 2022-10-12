
import crypto from "crypto"

const testString = "Test string " + crypto.randomInt(1000)
process.stdout.write(testString)
