
const marked = require('marked');
const cheerio = require('cheerio');
const fs = require('fs');
const _ = require('lodash');
const parsedHtml = {};


function transformH1ToLinks($h1) {
  const id = $h1.attr('id');
  const text = $h1.text();
  return `<a href="${id}">${text}</a>`;
}

function transformH2ToLinks($h2) {
  const $h2Links = [];
  _.forEach($h2, (value) => {
    const id = value.attribs.id;
    const text = id.replace(/-/g, ' ');
    const element = `<a href="${id}">${text}</a>`;
    $h2Links.push(element);
  });
  return $h2Links;
}

function transformHtml(html) {
  const $ = cheerio.load(html);
  parsedHtml.$h1 = transformH1ToLinks($('h1'));
  parsedHtml.$h2 = transformH2ToLinks($('h2'));
}

function transformIntoHtml(input) {
  const markdown = fs.readFileSync(input, 'utf8');
  const html = marked(markdown);
  transformHtml(html);
}

function isInputAFile(input) {
  return fs.stat(input, (err, stats) => {
    if (stats.isFile()) {
      transformIntoHtml(input);
    }
  });
}

exports.isInputAFile = isInputAFile;
