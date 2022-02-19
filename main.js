// use lodash - 1

import _ from 'lodash' // from node_modules

const usersA = [
  {userId: '1', name: 'Heropy'},
  {userId: '2', name: 'Bob'}
]

const usersB = [
  {userId: '1', name: 'Heropy'},
  {userId: '3', name: 'Amy'}
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA,usersB,'userId')
console.log('unionBy', usersD)
