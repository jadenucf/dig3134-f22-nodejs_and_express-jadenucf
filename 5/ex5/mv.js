import fs from "fs"

const data = ""
const file2 = "./testDir/TestFile3.txt"
fs.writeFileSync(file2, data, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log("the file has been created")
})

const rename = fs.renameSync("./testDir/TestFile.txt", "./testDir/TestFile2.txt")
const out = fs.readFileSync(rename, "UTF-8")
console.log(out)
