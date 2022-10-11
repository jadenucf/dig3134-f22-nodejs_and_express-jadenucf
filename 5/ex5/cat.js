import fs from "fs"
import path from "path"

// Put solution here

// 1. cat
const text = fs.readFileSync("./testDir/TestFile.txt", "UTF-8")
console.log(text)

// 2. cp
fs.copyFileSync("./testDir/TestFile.tx", "world.txt");
