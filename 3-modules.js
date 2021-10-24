// modules - encapsulated code (sharing vars)
// using exports of a file
// using 4-names and 5-utils
const names = require('./4-names')
const sapa = require('./5-utils')
const myCart = require('./6-alternative-flavor')
console.log(myCart)


sapa(names.firstMentor)
sapa(names.secondMentor)
