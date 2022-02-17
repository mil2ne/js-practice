// 전개 연산자 (Spread) rest parameter

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits) //  ['Apple', 'Banana', 'Cherry']
console.log(...fruits) // Apple Banana Cherry

const toObject = (a,b,...c) => ({a,b,c})
console.log(toObject(...fruits)) // {a: 'Apple', b: 'Banana', c: ['Cherry', 'Orange']}