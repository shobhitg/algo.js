#!/usr/bin/env node
var markdox = require('markdox');

var recursive = require('recursive-readdir');

recursive('./lib', function (err, files) {
  // Files is an array of filename
  files = files.filter(function(file) {
    return file.indexOf('node_modules') === -1 &&
    file.indexOf('.js') !== -1;
  });
  console.log(files);
  markdox.process(files, 'Readme.md', function(){
      console.log('Documentation generated');
  });
});



