import fs from "fs"
import path from "path"

// Put solution here

// 1. cat
const file1 = "./testDir/TestFile.txt"
const text = fs.readFileSync(file1, "UTF-8")
console.log(text)
