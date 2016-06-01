
// for Node.js
'use strict';

const fs = require('fs');
const cheerio = require('cheerio');
const parse = require('./parse.js');
const html = {};

const Write = {

  template: '',

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

  writeHeadersToSidebar() {
    const $ = cheerio.load(html.template);
    const h1 = parse.parsedHtml.$h1;
    $('#sidebar').html(h1);
    html.template = $.html();
  },

  writeToFile() {
    this.getTemplateFile();
    this.writeHeadersToSidebar();
  },

};

exports.write = Object.create(Write);
