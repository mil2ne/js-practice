// 객체 데이터 2(Object.assign)

const userAge = {
  name: 'mil2ne',
  age: 85
}

const userEmail = {
  name: 'mil2ne',
  email: 'mil2ne@gmail.com'
}

const target = Object.assign({}, userAge, userEmail)
console.log(target) // {name: 'mil2ne', age: 85, email: 'mil2ne@gmail.com'}
console.log(userAge) // {name: 'mil2ne', age: 85}
console.log(target === userAge) // false

const a = {k: 123}
const b = {k: 123}
console.log(a === b) // false
