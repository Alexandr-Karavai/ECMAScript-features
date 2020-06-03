const array = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]];

console.log(array.flat());
//[ 'a', 'b', 'c', 'd', 'e', [ 'f', 'g' ] ]

console.log(array.flat(2));
//[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
//----------------------------------------------------------------

const techs = ['react redux', 'angular', 'vue', 'node and mongoDB', 'deno'];
console.log(techs.flatMap(tech => tech.split(' ')));
/*
[
    'react',   'redux',
    'angular', 'vue',
    'node',    'and',
    'mongoDB', 'deno'
]*/
//----------------------------------------------------------------
//Array.prototype.includes
[1, 2, 3].includes(-1);                   // false
[1, 2, 3].includes(1);                    // true
[1, 2, 3].includes(3, 4);                 // false
[1, 2, 3].includes(3, 3);                 // false
[1, 2, NaN].includes(NaN);                // true
['foo', 'bar', 'quux'].includes('foo');   // true
['foo', 'bar', 'quux'].includes('norf');  // false