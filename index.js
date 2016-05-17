#!/usr/bin/env node

"use strict";

const program = require('commander');
const parse = require('./lib/parse.js');

let input;

program
  .version('0.0.1')
  .arguments('<input> [output]')
  .action(function(input, output) {
    parse.isInputAFile(input, output);
  })
  .parse(process.argv);
