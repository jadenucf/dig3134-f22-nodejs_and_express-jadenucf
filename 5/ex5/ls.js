import fs from "fs"

const testFolder = "./testDir"

fs.readdir(testFolder, (err, files) => {
  if (err) {
    console.log(err)
  }
  console.log(...files)
})
