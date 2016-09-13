"use strict";


var APP = APP || {};


APP.Cat = function Cat(options) {
  options = options || {};

  options.numLegs = 4;
  options.sound = 'meow';
  options.type = 'cat';

  APP.Animal.call(this, options);

  this.name = options.name || 'Garfield';

  this.purr = function() {
    console.log(this);
    return 'Purr...';
  };
};


APP.Cat.prototype = Object.create(APP.Animal.prototype);
APP.Cat.prototype.constructor = APP.Cat;


APP.Cat.create = function(options) {
  return new APP.Cat(options);
};


