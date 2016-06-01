#!/usr/bin/env node

const program = require('commander');
const parse = require('./lib/parse.js').parse;
const write = require('./lib/write-file.js').write;
const sugi = {};

program
  .version('0.0.1')
  .arguments('<input> [output]')
  .action((input, output) => {
    sugi.importFileName = input;
    parse.transformIntoHtml(input);
    write.writeToFile(input, output, parse.parsedHtml);
  })
  .parse(process.argv);

exports.sugi = sugi;
