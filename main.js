import _ from 'lodash'

// 얕은복사 (Shallow copy) , 깊은복사 (Deep copy) - 3
// 참조 데이터 내부에 또 다른 참조데이터 (배열 등) 이 있으면 깊은복사
// 없으면 얕은복사 해도 될듯

const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com']
}
const copyUser = _.cloneDeep(user)
console.log(copyUser === user) // false

user.age = 22
console.log('user', user) 
console.log('copyUser', copyUser)  

console.log('------')
console.log('------')

user.emails.push('mil2ne@gmail.com')
console.log(user.emails === copyUser.emails) // false
console.log('user', user) // {name: 'Heropy', age: 22, emails: Array(2)}
console.log('copyUser', copyUser) // {name: 'Heropy', age: 85, emails: Array(1)}