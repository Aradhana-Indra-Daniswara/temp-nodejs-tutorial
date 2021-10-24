// npm --version

// LOCAL DEPENDENCY - use for local project
// npm i <packageName>

// GLOBAL DEPENDENCY - use it for any project
// npm install -g <packageName>


// package.json - manifest file (stores important info about project / pacakge)
// CREATE ?
// manual apporach (create package.json in the root, create properties)
// npm init (step by step press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);