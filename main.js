// 얕은복사 (Shallow copy) , 깊은복사 (Deep copy) - 1

const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com']
}
const copyUser = Object.assign({}, user)
console.log(copyUser === user) // false

user.age = 22
console.log('user', user) // {name: 'Heropy', age: 22, emails: Array(1)}
console.log('copyUser', copyUser)  // {name: 'Heropy', age: 85, emails: Array(1)}

console.log('------')
console.log('------')
