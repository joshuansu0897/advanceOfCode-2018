const fs = require('fs')
const files = process.argv.slice(2)

const readFile = () => {
  let file = files.shift()
  return fs.readFileSync(file, "utf8")
}

exports.getLines = () => {
  let content = readFile()
  return content.split('\n')
}

exports.getFilesCount = () => {
  return files.length
}