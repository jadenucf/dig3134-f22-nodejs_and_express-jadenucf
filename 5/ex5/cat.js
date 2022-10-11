import fs from "fs"
import path from "path"

// Put solution here

// 1. cat
const file1 =  "./testDir/TestFile.txt"
const text = fs.readFileSync(file1, "UTF-8")
console.log(text)

// 2. cp
const data = ""
const file2 = "./testDir/TestFile2.txt"

fs.writeFileSync(file2, data, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log("goodnight, punpun!")
})

const copy = fs.copyFileSync(path.dirname(file2), "./testDir/TestFile2.txt")
const out = fs.readFileSync(copy, "UTF-8")
console.log(out)
