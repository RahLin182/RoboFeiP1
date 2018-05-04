var fs = require('fs');
 
var valores = 0;
var content = fs.readFileSync('z.dat', 'utf8').split("\n");

for(let i = 0; i <= content.length; i++ ){
    valores[i] = content[i].split("\09")


}
//console.log(content);
console.log(iterar)


  // .split("\n") separar por linhas
  //size of array contents dividido por sizeof arrays para retornar o numero de casas "i"