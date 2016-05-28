#!/usr/bin/env node

const program = require('commander');
const parse = require('./lib/parse.js');

program
  .version('0.0.1')
  .arguments('<input> [output]')
  .action((input, output) => {
    parse.isInputAFile(input, output);
  })
  .parse(process.argv);
