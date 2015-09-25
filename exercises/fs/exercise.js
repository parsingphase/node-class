// TODO get the module we need to work with files
var fs = require('fs');
// TODO ensure content should call callback after
// the path specified has the content specified
exports.ensureContent = function(path, content, cb) {
  // - pass on any errors that prevent this
  // - only modify the file if necessary
  fs.readFile(path, onRead);

  function onRead(error, data) {
    if (error) {
      cb(error);
    } else {
      if (data !== content) {
        fs.writeFile(path, content, cb);
      } else {
        cb(null); // call cb on all code paths
      }
    }
  }
};
