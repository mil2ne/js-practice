// storage - 1

const user = {
  name: 'Heropy',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'mil2ne@gmail.com'
  ]
}

// localstorage 의 set, get, remove
// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

// localstorage 의 수정 - 1
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))

// 추후에 lowdb 찾아서 볼것



