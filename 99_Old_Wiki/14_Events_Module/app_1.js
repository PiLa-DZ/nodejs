// *** Core Concepts of Events in Node.js ***

let fs = require('fs');
let rs = fs.createReadStream('./dir/file_1.txt');

rs.on('open', function () {
  console.log('The file is open');
}); 
