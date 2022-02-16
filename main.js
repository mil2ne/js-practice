// .push() .unshift()
// 원본 수정됨 주의

const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.push(5)
console.log(numbers) // 가장 뒤쪽에 추가

numbers.unshift(0)
console.log(numbers) // 가장 앞쪽에 추가