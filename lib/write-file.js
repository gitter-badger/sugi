
// for Node.js
'use strict';

const fs = require('fs');
const cheerio = require('cheerio');
const parse = require('./parse.js');
const sugi = require('../index.js');
const html = {};

const Write = {

  template: '',

  input: null,

  output: null,

  init() {
    this.input = sugi.options.input;
    this.output = sugi.options.output;

    this.getTemplateFile();
    this.writeHeadersToSidebar();
    this.writeBodyToContent();
    this.setFileName();
    this.writeFile();
  },

  setFileName() {
    if (Object.is(this.output, null)) {
      const splitName = this.input.split('.')[0];
      const newFilename = `${splitName}.html`;
      return newFilename;
    }
    return sugi.options.output;
  },

  getTemplateFile() {
    const filename = `${__dirname}/../templates/default.html`;
    html.template = fs.readFileSync(filename, 'utf-8', (err) => {
      if (err) throw err;
    });
    return;
  },

  writeHeadersToSidebar() {
    const $ = cheerio.load(html.template);
    const $h1 = parse.parsedHtml.$h1;
    const $h2 = parse.parsedHtml.$h2;
    $('#sidebar').append($h1, $h2);
    html.template = $.html();
  },

  writeBodyToContent() {
    const $ = cheerio.load(html.template);
    const $body = parse.parsedHtml.$html;
    $('#content').html($body);
    html.template = $.html();
  },

  writeFile() {
  },

};

exports.write = Object.create(Write);
