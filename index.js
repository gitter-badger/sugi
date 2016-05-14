#!/usr/bin/env node
console.log('test');

// Run some jQuery on a html fragment
const marked = require('marked');
const jsdom = require("jsdom");

var test = marked('# header')
jsdom.env({
  html: test,
  done: function (errors, window) {
    document = window.document;
    var header = document.getElementsByTagName('h1')[0];
    console.log(header.textContent);
  }
});
