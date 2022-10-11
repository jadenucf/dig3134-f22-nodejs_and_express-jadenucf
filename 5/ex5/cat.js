import fs from "fs"
import path from "path"

// Put solution here

// 1. cat
const text = fs.readFileSync("./testDir/TestFile.txt", "UTF-8")
console.log(text)

// 2. cp
const data = ""
const file2 = "./testDir/TestFile2.txt"

fs.writeFileSync(`./testDir/TestFile2.txt`, data, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log("goodnight, punpun!")
})

const copy = fs.copyFileSync("./testDir/TestFile.txt", "./testDir/TestFile2.txt")

console.log(copy)
