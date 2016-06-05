
// for Node.js
'use strict';

const fs = require('fs');
const cheerio = require('cheerio');
const parse = require('./parse.js');
const html = {};

const Write = {

  template: '',

  init() {
    this.getTemplateFile();
    this.writeH1ToSidebar();
    this.writeH2ToSidebar();
    this.writeBodyToContent();
  },

  setFileName(input, output) {
    if (typeof output === 'undefined') {
      const splitName = input.split('.')[0];
      const newFilename = `${splitName}.html`;
      return newFilename;
    }
    return output;
  },

  getTemplateFile() {
    const filename = `${__dirname}/../templates/default.html`;
    html.template = fs.readFileSync(filename, 'utf-8', (err) => {
      if (err) throw err;
    });
    return;
  },

  writeH1ToSidebar() {
    const $ = cheerio.load(html.template);
    const $h1 = parse.parsedHtml.$h1;
    $('#sidebar').append($h1);
    html.template = $.html();
  },

  writeH2ToSidebar() {
    const $ = cheerio.load(html.template);
    const $h2 = parse.parsedHtml.$h2;
    $('#sidebar').append($h2);
    html.template = $.html();
  },

  writeBodyToContent() {
    const $ = cheerio.load(html.template);
    const $body = parse.parsedHtml.$html;
    $('#content').html($body);
    html.template = $.html();
  },
};

exports.write = Object.create(Write);
