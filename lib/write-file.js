
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
    this.theme = sugi.options.theme;

    this.getTemplateFile();
    this.writeHeadersToSidebar();
    this.writeCssLink();
    this.writeBodyToContent();
    this.setFileName();
    this.writeFile();
  },

  setFileName() {
    if (this.input === this.output) {
      const splitName = this.input.split('.')[0];
      this.output = `${splitName}.html`;
    }
  },

  getTemplateFile() {
    const filename = `${__dirname}/../templates/default.html`;
    html.template = fs.readFileSync(filename, 'utf-8', (err) => {
      if (err) throw err;
    });
    return;
  },

  writeCssLink() {
    const $ = cheerio.load(html.template);
    const link = `<link rel="stylesheet" href="../dist/css/${this.theme}.min.css">`;
    $('head').html(link);
    html.template = $.html();
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
    fs.writeFile(this.output, html.template, 'utf-8');
  },

};

exports.write = Object.create(Write);
