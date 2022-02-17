// 데이터 불변성 ( immutablility ) - 1
// 원시데이터 : String, Number , Boolean, undefined, null
// 참조형 데이터 : Object , Array, Function

let a = 1
let b = 4
console.log(a,b, a === b) // 1 4 false
b = a
console.log(a,b, a === b) // 1 1 true
a = 7
console.log(a,b, a === b) // 7 1 false
let c = 1
console.log(b,c, b === c) // 1 1 true