"use strict";


var APP = APP || {};


APP.Animal = function Animal(options) {
  options = options || {};

  this.numLegs = options.numLegs || 0;
  this.sound = options.sound || '...';
  this.type = options.type || 'animal';
};


APP.Animal.PLANET = 'Earth';


APP.Animal.create = function(options) {
  return new APP.Animal(options);
};


APP.Animal.prototype.speak = function() {
  console.log(this);
  return this.sound.toUpperCase() + '!';
};







