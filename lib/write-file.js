
// for Node.js
'use strict';

const fs = require('fs');
const cheerio = require('cheerio');
const sugi = require('../index.js');

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
    sugi.template = fs.readFileSync(filename, 'utf-8', (err) => {
      if (err) throw err;
    });
    return;
  },

  writeHeadersToSidebar() {
    const $ = cheerio.load(sugi.template);
    $('#sidebar').html(h1);
    sugi.template = $.html();
  },

  writeToFile() {
    this.getTemplateFile();
    this.writeHeadersToSidebar();
  },

};

exports.write = Object.create(Write);
exports.sugi = sugi;
