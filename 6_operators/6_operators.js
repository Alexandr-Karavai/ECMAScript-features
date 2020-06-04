const values = {
    nullValue: null,
    emptyText: "",
    someNumber: 42,
    zeroNumber: 0,
    undefinedValue: undefined,
    falseValue: false,
    name: {
        objName: {
            value: 'my name'
        }
    }
}

const emptyObj = {}

console.log(values.nullValue || 'value - null');                  // value - null
console.log(values.emptyText || 'value - emptyText');             // value - emptyText
console.log(values.someNumber || 'value - someNumber');           // 42
console.log(values.zeroNumber || 'value - zeroNumber');           // value - zeroNumber
console.log(values.undefinedValue || 'value - undefinedValue');   // value - undefinedValue
console.log(values.falseValue || 'value - falseValue');           // value - falseValue
console.log('==============================================');
console.log(values.nullValue ?? 'value - null');                  // value - null
console.log(values.emptyText ?? 'value - emptyText');             // empty string in console.log
console.log(values.someNumber ?? 'value - someNumber');           // 42
console.log(values.zeroNumber ?? 'value - zeroNumber');           // 0
console.log(values.undefinedValue ?? 'value - undefinedValue');   // value - undefinedValue
console.log(values.falseValue ?? 'value - falseValue');           // false

//----------------------------------------------------------------

/*
function showValue(obj) {
    return obj.name.objName.value;
}

console.log(showValue(values))       // my name
console.log(showValue(emptyObj))     // TypeError: Cannot read property 'objName' of undefined
*/

function withOptionalOperator(obj) {
    return obj?.name?.objName?.value;
}

console.log(withOptionalOperator(values)) // my name
console.log(withOptionalOperator(emptyObj)) // undefined, without TypeError