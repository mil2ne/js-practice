// 전개 연산자 (Spread) 기본

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits) //  ['Apple', 'Banana', 'Cherry']
console.log(...fruits) // Apple Banana Cherry

function toObject(a,b,c) {
  return {
    a: a,
    b: b,
    c: c,
  }
}
console.log(toObject(...fruits)) // {a: 'Apple', b: 'Banana', c: 'Cherry'}