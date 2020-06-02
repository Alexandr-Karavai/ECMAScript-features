const person = {
    name: 'Alex',
    age: 30
}

const fruit = {
    name: 'lemon',
    color: 'yellow'
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//{ value: 'Alex', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person, 'age'));

//For all
console.log(Object.getOwnPropertyDescriptors(person));

//----------------------------------------------------------------
const fromEntries = Object.entries(fruit);
//[ [ 'name', 'lemon' ], [ 'color', 'yellow' ] ]

console.log(Object.fromEntries(fromEntries));

for (const [key, value] of fromEntries) {
    console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
}
//----------------------------------------------------------------
console.log(Object.keys(fruit));
console.log(Object.values(fruit));