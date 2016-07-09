#!/usr/bin/env node

const program = require('commander');
const parse = require('./lib/parse.js').parse;
const write = require('./lib/write-file.js').write;
const bundle = require('./lib/bundle.js').bundle;
const options = {}

program
  .version('0.0.1')
  .arguments('<input> [output]')
  .action((input, output) => {
    options.input = input;
    options.output = output || input;
    options.theme = 'default';

    setTimeout(() => {
      parse.init();
      write.init();
      bundle.init();
    });
  })
  .parse(process.argv);

exports.options = options;
