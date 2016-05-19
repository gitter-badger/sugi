
"use strict";

const marked = require('marked');
const cheerio = require('cheerio');
const fs = require('fs');
const _ = require('lodash');

function isInputAFile(input) {
  const stats = fs.stat(input, function(err, stats) {
    if (stats.isFile()) {
      transformIntoHtml(input);
    }
  });
}

function transformIntoHtml(input) {
  const markdown = fs.readFileSync(input, 'utf8');
  const html = marked(markdown);
  transformHtml(html);
}

function transformHtml(html) {
  const $ = cheerio.load(html);
  const $h1 = transformH1ToLinks($('h1'));
  const $h2 = transformH2ToLinks($('h2'));
}

function transformH1ToLinks($h1) {
  const id = $h1.attr('id');
  const text = $h1.text();
}

function transformH2ToLinks($h2) {
  let $h2Links = [];
  _.forEach($h2, function(value) {
    const id = value.attribs.id;
    const text = id.replace(/-/g, ' ');
    const element = `<a href="${id}">${text}</a>`
    $h2Links.push(element);
  })
  return $h2Links;
}


exports.isInputAFile = isInputAFile;
