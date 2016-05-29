#!/usr/bin/env node

const program = require('commander');
const parse = require('./lib/parse.js').parse;
const write = require('./lib/write-file.js').write;

program
  .version('0.0.1')
  .arguments('<input> [output]')
  .action((input, output) => {
    parse.transformIntoHtml(input);
    write.getTemplateFile();
    write.writeToFile(input, output, parse.parsedHtml);
  })
  .parse(process.argv);
