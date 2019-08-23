'use strict'

const tsNode = require('ts-node')

tsNode.register({})

const args = process.argv.slice(2)
const scriptName = args[0]

if (!scriptName) {
  console.error('Please pass a script name as an argument to @cdimitroulas/typescript-scripts')
  process.exit(1)
}

switch (scriptName) {
  case 'init':
    console.log('should run the init script here')
    process.exit(0)

  default:
    console.log(`Unknown script '${scriptName}' called. Did you make a typo?`)
    process.exit(1)
}

