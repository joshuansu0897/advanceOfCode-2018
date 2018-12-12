const lib = require('./lib')

while (lib.getFilesCount() > 0) {
  let lines = lib.getLines()

  let sum = 0
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    sum += Number(line)
  }

  console.log(sum);
}