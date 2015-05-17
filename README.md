# Vico

Create sequences of time ordered events.

```js
var vico = require('vico');
seq = vico("a b c".split(' '), { duration: 10, delay: 2 });
seq[0] // => { value: 'a', position: 2, duration: 10 }
seq[1] // => { value: 'b', position: 12, duration: 10 }
seq[2] // => { value: 'c', position: 22, duration: 10 }
vico.duration(seq)  // 32
```

Vico always return an array in which each element is an object with value, position and duration.

## API

### vico(array, options)

The `vico` function allows the following options:

- duration: the duration of each event (integer)
- delay: the delay of each event (integer)

### vico.clone(array)

If the array contains events, clone the array. If not, create a new array with elements mapped to events.

### vico.sort(array)

Given an array of events, sort it by position

### vico.duration

Returns the length of the sequence

### vico.merge(s1, s2, s3...)

Merge a list of sequences with its events ordered by position
