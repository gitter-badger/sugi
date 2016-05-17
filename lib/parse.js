
const marked = require('marked');
const jsdom = require('jsdom');
const fs = require('fs');

// const file = fs.createReadStream(input);

function isInputAFile(input) {
  stats = fs.stat(input, function(err, stats) {
  if(stats.isFile()) {
    readFile(input);
  }
});

function readFile(input) {
  input = fs.createReadStream(input);
  console.log(input);
}
  // jsdom.env({
  //   html: input,
  //   done: function (errors, window) {
  //     document = window.document;
  //     var header = document.getElementsByTagName('h1')[0];
  //     console.log(header.textContent);
  //   }
  // });
}

exports.isInputAFile = isInputAFile;
