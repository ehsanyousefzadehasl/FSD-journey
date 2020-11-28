var message = require('./test');
var rs = require('readline-sync');

var aNewNum = 30;
var aNewNewNum = 20;

console.log(aNewNum + aNewNewNum);

var name = rs.question('your name? ');
console.log(message + ', your name is: ' + name);
