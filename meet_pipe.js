var fs = require ('fs');
var file = process.argv[2];
fs.process.stdin(file).pipe(process.stdout);