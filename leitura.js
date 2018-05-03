fs = require('fs')

const data = fs.readFile('z.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    //console.log(data);
  });



console.log(data);