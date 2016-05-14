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

//
//
//
// var marked = require('marked');
// var jsdom = require('jsdom').jsdom;
//
// const example = marked('# Hi <br> ## Hello');
// var test = '';
// jsdom.env({
//   html: '<h1>Hello</h1>',
//   done: function(err, window) {
//     test = window.document.body;
//     logTest(test);
//   }
// });
