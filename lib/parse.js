
const marked = require('marked');
const cheerio = require('cheerio');
const fs = require('fs');
const _ = require('lodash');

const parsedHtml = {};

const Parse = {

  transformIntoHtml: function transformHtml(input) {
    const markdown = fs.readFileSync(input, 'utf8');
    const html = marked(markdown);
    this.setParsedHtml(html);
  },

  isInputAFile: function isAFile(input) {
    fs.stat(input, (err, stats) => {
      if (err) {
        console.error(err);
        return false;
      }
      if (stats.isFile()) {
        this.transformIntoHtml(input);
      }
      return true;
    });
  },

  setParsedHtml: function setParsedHtml(html) {
    const $ = cheerio.load(html);
    parsedHtml.$h1 = this.transformH1ToLinks($('h1'));
    parsedHtml.$h2 = this.transformH2ToLinks($('h2'));
    parsedHtml.$html = marked(html);
  },

  transformH2ToLinks: function transformMd($h2) {
    const $h2Links = [];
    _.forEach($h2, (value) => {
      const id = value.attribs.id;
      const text = id.replace(/-/g, ' ');
      const element = `<a href="${id}">${text}</a>`;
      $h2Links.push(element);
    });
    return $h2Links;
  },

  transformH1ToLinks: function transform($h1) {
    const id = $h1.attr('id');
    const text = $h1.text();
    return `<a href="${id}">${text}</a>`;
  },

};

exports.parse = Object.create(Parse);
