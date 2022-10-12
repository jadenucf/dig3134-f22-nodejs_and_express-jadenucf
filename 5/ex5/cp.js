
// 2. cp
import fs from "fs"
import path from "path"

const data = ""
const file2 = "./testDir/TestFile2.txt"
fs.writeFileSync(file2, data, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log("the file has been created")
})

const copy = fs.copyFileSync("./testDir/Testfile.txt", "./testDir/TestFile2.txt")
const out = fs.readFileSync(copy, "UTF-8")
console.log(out)
