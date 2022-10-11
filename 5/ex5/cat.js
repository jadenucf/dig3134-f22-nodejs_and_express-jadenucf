import fs from "fs"
import path from "path"

// Put solution here

// 1. cat
const text = fs.readFileSync("./testDir/TestFile.txt", "UTF-8")
//console.log(text)

// 2. cp
const copy = fs.copyFileSync("./testDir/TestFile.txt", "./testDir/TestFile2.txt")
console.log(copy)
