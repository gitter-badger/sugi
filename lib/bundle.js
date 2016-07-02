
"use strict";

const sugi = require('../index.js');

const Bundle = {

  template: '',

  input: null,

  output: null,

  theme: null,

  init() {
    this.template = sugi.options.template;
    this.template = sugi.options.theme;
  },


};

exports.bundle = Object.create(bundle);
