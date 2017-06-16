'use strict';
module.exports = function() {
  const secretNumber = Math.floor((Math.random()*1000001));
  return function(){
    return secretNumber;
  };
};
