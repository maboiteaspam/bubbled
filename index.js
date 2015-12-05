var bubbler = require('bubbler')
var flower = require('flower')

module.exports = function bubbled (name, events, fnT, fnF) {
  return bubbler(flower(fnT, fnF), events, name);
};
