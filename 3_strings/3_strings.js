const start = '        Hello world, ';
const end = 'This is new ES features       ';

const ref = 'google';

console.log(start.trimStart() + end.trimEnd());
console.log((start + end).trim());
//----------------------------------------------------------------
console.log(ref.padStart(10, 'www.'));

'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"

console.log(ref.padEnd(10, '.com'));

'abc'.padEnd(10);         // "abc       "
'abc'.padEnd(10, "foo");  // "abcfoofoof"
'abc'.padEnd(6,"123456"); // "abc123"
//----------------------------------------------------------------
//Tag templates
function tag(strings, name, age) {
    const [s1, s2, s3] = strings;

    if (age > 40 ) {
        return `${s1}${name}${s2}eldest${s3}`
    }
    return `${s1}${name}${s2}youngest${s3}`
}

const person = {
    name: 'Alex',
    age: 32
}

const output = tag`A man named ${person.name} is the ${person.age} in the family`;

console.log(output);
