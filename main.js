// use json - 1

import myData from './myData.json'

console.log(myData)

const user = {
  name: 'Heropy',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'mil2ne@gmail.com'
  ]
}

console.log(user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)