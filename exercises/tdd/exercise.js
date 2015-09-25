// we want to write tests for the following spec:
// - out

/**
 *
 * @param x x-pos
 * @param y y-pos
 * @param w space width
 * @param h space height
 */
exports.outOfBounds = function outOfBounds(x, y, w, h) {
  return !(x >= 0 && x < w && y >= 0 & y < h); // quicker to define !good
};
 

