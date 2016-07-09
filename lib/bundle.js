
const fs = require('fs');
const sugi = require('../index.js');

const Bundle = {

  template: '',

  input: null,

  output: null,

  theme: null,

  init() {
    this.template = sugi.options.template;
    this.theme = sugi.options.theme;
    this.copyCss();
  },

  copyCss() {
    console.log(this.theme);
  }

};

exports.bundle = Object.create(Bundle);
