import fs from "fs"
import path from "path"

// Put solution here

// 1. cat
const text = fs.readFileSync("./testDir/TestFile.txt", "UTF-8")
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

const copy = fs.copyFileSync(path.resolve(file2), "./testDir/TestFile2.txt")
const out = fs.readFileSync(copy, "UTF-8")
console.log(out)
