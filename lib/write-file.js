
// for Node.js
"use strict";

const fs = require('fs');

const Write = {

  template: '',

  setFileName: function setName(input, output) {
    if (typeof output === 'undefined') {
      const splitName = input.split('.')[0];
      const newFilename = `${splitName}.html`;
      return newFilename;
    }
    return output;
  },

  getTemplateFile: function getFile() {
    const filename = `${__dirname}/../templates/index.html`;
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) throw err;
      this.template = data;
      return;
    });
  },

  writeToFile: function writeFile(input, output, html) {
    // const filename = this.setFileName(input, output);
    // fs.writeFile(filename, html, (err) => {
    //   if (err) throw err;
    // });
  },

};

exports.write = Object.create(Write);
