import _ from 'lodash' // from node_modules
import checkType from './getType' // getType.js
import random from './getRandom' // getRandom.js


// 가져오기, 내보내기 - 1

console.log(_.camelCase('the hello world'))
console.log(checkType([1,2,3]))
console.log(random(),random())