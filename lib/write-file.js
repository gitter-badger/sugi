
const fs = require('fs');

const Write = {

  writeToFile: function writeFile(input, output, html) {
    console.log(html);
  },

};

exports.write = Object.create(Write);
