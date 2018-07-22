MathGraph.js
===================

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

#### math graph library ####

[Examples](https://moritanian.github.io//MathGraph.js/)

### Usage ###


```javascript

import MathGraph from './math-graph.js';

var graph = MathGraph.createGraph();

var a1 = graph.variable( 0 );
var a2 = graph.variable( 0 );

var a3 = graph.add( a1, a2 );
var a4 = graph.sub( a1, a3 );

var result = graph.run({[a1]: 2, [a2]: 3});
console.log(result)
console.log(`$a3 =  ${a1.value} + ${a2.value} ` );
console.log(`$a3 =  ${a3.value} ` );
console.log(`$a4 =  ${a1.value} - $a3 ` );
console.log(`$a4 =  ${a4.value} ` );

```