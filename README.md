# Vico

Create sequences of time ordered events.

```js
var vico = require('vico');
seq = vico("a b c d e".split(' '), { duration: 96 });
seq[0].value      // => 'a'
seq[0].position   // => 0
seq[0].duration   // => 96
vico.duration(seq)  // 5 * 96
```
