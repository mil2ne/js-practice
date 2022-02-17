// 데이터 불변성 ( immutablility ) - 2
// 원시데이터 : String, Number , Boolean, undefined, null
// 참조형 데이터 : Object , Array, Function

let a = { k: 1 }
let b = { k: 1 }
console.log(a, b, a == b) // {k: 1} {k: 1} false

a.k = 7
b = a
console.log(a, b, a == b) // {k: 7} {k: 7} true

a.k = 2
console.log(a, b, a == b) // {k: 2} {k: 2} true

let c = b
console.log(a, b, c, a == c) // {k: 2} {k: 2} {k: 2} true

a.k = 9
console.log(a, b, c, a == c) // {k: 9} {k: 9} {k: 9} true