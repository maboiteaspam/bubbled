var bubbler = require('@maboiteaspam/bubbler')
var flower = require('@maboiteaspam/flower')

module.exports = function bubbled (name, events, fnT, fnF) {
  var args = [].slice.apply(arguments);
  if (args.length===0) return bubbler(flower(), ['message']);
  if (args.length===1) return bubbler(flower(name), ['message']);
  if (args.length===2) return bubbler(flower(name, events), ['message']);
  if (args.length===3) return bubbler(flower(events, fnF), name);
  return bubbler(flower(fnT, fnF), events, name);
};
