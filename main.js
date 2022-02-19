// use lodash - 2

import _ from 'lodash' // from node_modules

const users = [
  {userId: '1', name: 'Heropy'},
  {userId: '2', name: 'Bob'},
  {userId: '3', name: 'Amy'},
  {userId: '4', name: 'Neo'},
  {userId: '5', name: 'Evan'}
]

const foundUser = _.find(users, {name: 'Amy'})
console.log(foundUser)

const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUserIndex)

_.remove(users, {name: 'Heropy'})
console.log(users)

