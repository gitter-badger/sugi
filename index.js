#!/usr/bin/env node

// Run some jQuery on a html fragment
const program = require('commander')
const fs = require('fs')

require('./lib/parse.js')

program
  .version('0.0.1')
  .arguments('<input> [output]')
  .action(function(cmd, input, output) {
    console.log(input);
  })
  .parse(process.argv)
