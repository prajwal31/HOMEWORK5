var path = require('path');

var extractPath = function (url) {
  var filePath;
  var fileName = 'index.html';

  if (url.length > 1) {
    fileName = 'error.html';
  }
  console.log('The fileName is: ' + fileName);

  filePath = path.resolve(__dirname, 'app', fileName);
  return filePath;
};

module.exports = extractPath;
