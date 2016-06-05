#!/usr/bin/env node

const program = require('commander');
const parse = require('./lib/parse.js').parse;
const write = require('./lib/write-file.js').write;
const options = {}

program
  .version('0.0.1')
  .arguments('<input> [output]')
  .action((input, output) => {
    options.input = input;
    options.output = output || input;
    setTimeout(() => {
      parse.init();
      write.init();
    });
  })
  .parse(process.argv);

exports.options = options;
