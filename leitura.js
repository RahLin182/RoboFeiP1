var fs = require('fs');
 
var contents = fs.readFileSync('z.txt', 'utf8').split("\n");
console.log(contents);



  // .split("\n") separar por linhas