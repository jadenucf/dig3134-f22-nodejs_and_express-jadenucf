import fs from "fs"
import path from "path"

// Put solution here

// 1. cat
const text = fs.readFileSync("./testDir/TestFile.txt", "UTF-8")
console.log(text)

// 2. cp
const data = ""
fs.writeFileSync("./testDir/TestFile2.txt", data, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log("goodnight, punpun!")
})

fs.copyFileSync("./testDir/TestFile.txt", "./testDir/TestFile2.txt")
