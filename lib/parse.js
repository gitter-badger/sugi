
"use strict";

const marked = require('marked');
const cheerio = require('cheerio');
const fs = require('fs');

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
  getHeaderElements(html);
}

function getHeaderElements(html) {
  const $ = cheerio.load(html);
  const header = $('#test-header');
  console.log(header.text());
}

exports.isInputAFile = isInputAFile;
