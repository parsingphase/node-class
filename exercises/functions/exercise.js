exports.callMeLater = function(callback) {
  // TODO make this call the callback after 500ms
  setTimeout(callback, 500);
};

exports.createMultipler = function(n) {
  // TODO return a function that takes a single numeric
  // arguments and multiplies it by n
  return function(m) {
    return m * n;
  }
};

exports.callMeN = function(fn, n) {
  // TODO return a function that calls the original
  // function `n` times
  return function() {
    for (var i = 0; i < n; i++) {
      fn();
    }
  }
};
