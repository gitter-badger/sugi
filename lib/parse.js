
const marked = require('marked');
const cheerio = require('cheerio');
const fs = require('fs');
const _ = require('lodash');
const sugi = require('../index.js');

const Parse = {

  parsedHtml: {},

  init() {
    this.input = sugi.options.input;
    if (this.isInputAFile(this.input)) {
      const markdown = fs.readFileSync(this.input, 'utf8');
      const html = marked(markdown);
      this.setParsedHtml(html);
    }
  },

  isInputAFile(input) {
    fs.stat(input, (err, stats) => {
      if (err) {
        if (err) throw err;
        return false;
      }
      this.parsedHtml.inputFileStats = stats;
      return true;
    });
    return true;
  },

  transformH1ToLinks($h1) {
    const id = $h1.attr('id');
    const text = $h1.text();
    return `<a href="${id}">${text}</a>`;
  },

  transformH2ToLinks($h2) {
    const $h2Links = [];
    _.forEach($h2, (value) => {
      const id = value.attribs.id;
      const text = id.replace(/-/g, ' ');
      const element = `<a href="${id}">${text}</a>`;
      $h2Links.push(element);
    });
    return $h2Links;
  },

  setParsedHtml(html) {
    const $ = cheerio.load(html);
    this.parsedHtml.$h1 = this.transformH1ToLinks($('h1').first());
    this.parsedHtml.$h2 = this.transformH2ToLinks($('h2'));
    this.parsedHtml.$html = marked(html);
  },

};

exports.parse = Object.create(Parse);
exports.parsedHtml = Parse.parsedHtml;
