// 객체 데이터 4(Object.keys)

const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}

const keys = Object.keys(user)
console.log(keys) //  ['name', 'age', 'email']

console.log(user['email']) // thesecon@gmail.com

const values = keys.map(key => user[key])
console.log(values) // ['Heropy', 85, 'thesecon@gmail.com']
