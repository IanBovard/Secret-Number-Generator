'use strict';
module.exports = function() {
  let secretNumber = ((Math.random()*1000001));
  return function(){
    return secretNumber;
  };
};
