import _ from 'lodash' // from node_modules
import checkType from './getType' // getType.js
// import {random, user as heropy} from './getRandom' // getRandom.js
// default 가 없으면 {} 안에 넣어야 함
import * as R from './getRandom'

// 가져오기, 내보내기 - 2

console.log(_.camelCase('the hello world'))
console.log(checkType([1,2,3]))
// console.log(random(),random())
console.log(R)
console.log(R.random())
console.log(R.user)
console.log(R.default)