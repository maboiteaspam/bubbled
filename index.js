var bubbler = require('bubbler')
var flower = require('flower')

module.exports = function bubbled (name, events, fnT, fnF) {
  var args = [].slice.apply(arguments);
  if (args.length===3) return bubbler(flower(events, fnF), name);
  return bubbler(flower(fnT, fnF), events, name);
};
