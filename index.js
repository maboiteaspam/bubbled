var flower = require('flower')
var debug = require('debug')('bubbled')
var k = 0;

module.exports = function bubbled (name, events, fnT, fnF) {
  var stream;

  var args = [].slice.apply(arguments);
  if (args.length===3) {
    fnF = fnT
    fnT = events
    events = name
    name = 'bubbled-' + k;
    stream = flower(fnT, fnF);
  } else {
    stream = flower(fnT, fnF);
  }


  var index = events.indexOf('data');
  index>-1 && events.splice(index, 1);


  var oldPipe = stream.pipe;
  stream.pipe = function (s, o) {
    events.forEach(function (event) {
      s.on(event, function(message) {
        debug('%s: bubble up message %s', name, event)
        stream.emit(event, message)
      })
    })
    return oldPipe.apply(stream, [].slice.apply(arguments));
  };

  k++;

  return stream;
};
