// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com',
  address: 'USA'
}

const { name: heropy, age, email, address = 'Korea'} = user
// E.g user.address
// address 가 기본설정되어 있으면 기본 적용한 Korea 는 무시

// 변수명을 : 기호를 통해서 임의 변경 가능


console.log(`사용자의 이름은 ${heropy} 입니다.`)
console.log(`${heropy} 의 나이는 ${age} 입니다.`)
console.log(`${heropy} 의 이메일 주소는 ${email} 입니다.`)
console.log(address)


const fruits = ['Apple', 'Banana', 'Cherry']
const [a,b,c,d] = fruits
console.log(a,b,c,d)

const fruit = ['Apple', 'Banana', 'Cherry']
const [,f] = fruit
console.log(f) // Banana

const fruit1 = ['Apple', 'Banana', 'Cherry']
const [,,g] = fruit1
console.log(g) // Cherry