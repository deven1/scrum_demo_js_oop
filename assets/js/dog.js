"use strict";


var APP = APP || {};


APP.Dog = function Dog(options) {
  options = options || {};

  options.numLegs = 4;
  options.sound = 'ruff';
  options.type = 'dog';

  APP.Animal.call(this, options);

  this.name = options.name || 'Scooby';

  this.fetch = function() {
    console.log(this);
    return  'Be right back with that kind sir';
  };
};


APP.Dog.prototype = Object.create(APP.Animal.prototype);
APP.Dog.prototype.constructor = APP.Dog;


APP.Dog.create = function(options) {
  return new APP.Dog(options);
};


// Uncomment this to add functionality to the
// Animal class's #speak method
// 
// APP.Dog.prototype.speak = function() {
//   console.log('Added functionality!');
//   return APP.Animal.prototype.speak.call(this);
// };


