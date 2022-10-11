import fs from "fs"
import path from "path"

// 2. cp
const data = ""
const file2 = "./testDir/TestFile2.txt"

fs.writeFileSync(file2, data, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log("hello")
})

const copy = fs.copyFileSync(path.dirname(file2), "./testDir/TestFile2.txt")
const out = fs.readFileSync(copy, "UTF-8")
console.log(out)
