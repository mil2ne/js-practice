// splice()
// 원본수정됨 주의

const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.splice(2,2) 
console.log(numbers) // 1,2

numbers.splice(1,0,999)
console.log(numbers) // 1,999,2

numbers.splice(2,1,99)
console.log(numbers) // 1,999,99

fruits.splice(2,0,'Orange')
console.log(fruits) // 'Apple', 'Banana', 'Orange', 'Cherry'