
const fs = require('fs-extra');
const sugi = require('../index.js');

const Bundle = {

  template: '',

  theme: null,

  init() {
    this.template = sugi.options.template;
    this.theme = sugi.options.theme;
    this.copyCss();
  },

  copyCss() {
    const themeFile = `${__dirname}/../dist/${this.theme}/css/${this.theme}.css`;
    fs.ensureDir('./css', () => {
      fs.copySync(themeFile, `./css/${this.theme}.css`);
    });
  },

};

exports.bundle = Object.create(Bundle);
