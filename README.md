# bubbled

Stream capable of events bubbling.

## Install

    npm i maboiteaspam/bubbled --save

## Usage

File __playground.js__
```js
var bubbled = require('bubbled')                // bubbled are streams,
                                                //
var events = ['message'];                       // which listens to certain events.
                                                //
var streamA = bubbled('streamA', events);       // Their signature is
var streamB = bubbled('streamB', events);       //  - bubbled(name, events, fnTransform, fnFlush)
var streamC = bubbled('streamC', events);       //  - bubbled(events, fnTransform, fnFlush)
                                                //
streamA.pipe(streamB);                          // When bubbled streams
streamA.pipe(streamC);                          // are piped together.
                                                //
streamB.emit('message', 'hello, its streamB !') // A down stream can emit events
streamC.emit('message', 'hello, its streamC !') // upward in the stream.
                                                //
streamA.on('message', function (chunk) {        // Those streams enable you to listen
  console.log(chunk)                            // all down streams events in one handler.
})                                              //
                                                //
streamB.emit('message', 'hello, its streamB !') // Note : re-trigger the events to invoke the listener,
streamC.emit('message', 'hello, its streamC !') // so something shows up at runtime ;)

```

## More

You can see it in action in `npi`

- https://github.com/maboiteaspam/npi
- https://github.com/maboiteaspam/flower


