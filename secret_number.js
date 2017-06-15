'use strict';
module.exports = function() {
  let secretNumber = (Math.random()*1000000 + 1);
  return function(){
    return secretNumber;
  };
};
var myNumber = module.exports();
console.log(myNumber());
console.log(myNumber());
console.log(myNumber());
var myNewNumber = module.exports();
console.log(myNewNumber());
console.log(myNewNumber());
console.log(myNewNumber());