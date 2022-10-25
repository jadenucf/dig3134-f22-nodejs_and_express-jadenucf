import fs from "fs"
const path1 = process.argv[2]
const path2 = process.argv[3]

fs.renameSync(path1, path2)
