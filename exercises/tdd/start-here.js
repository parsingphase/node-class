// here is the function to test
var outOfBounds = require("./exercise").outOfBounds;

// our specification for outOfBounds is
//
// outOfBounds(x, y, width, height)
//
// returns true if (is out of bounds)
// ie false if
//   0 <= x < width
//         AND
//   0 <= y < height

describe("the outOfBounds function", function() {

  // these tests look repetitive, perhaps you could
  // think of a way of cleaning it up?
  // - keep readability of tests
  // - keep it so one test can fail alone

  it("prevents players leaving the top", function() {
    // TODO stop players reaching { y: < 0 }

    var result = outOfBounds(0,-1,100,100);
    assert.equal(result,true);
  });

  it("prevents players leaving the left", function() {
    // TODO stop players reaching { x: < 0 }
    var result = outOfBounds(-1,0,100,100);
    assert.equal(result,true);
  });

  it("prevents players leaving the right", function() {
    // TODO stop players reaching { x: >= width }
    var result = outOfBounds(101,0,100,100);
    assert.equal(result,true);
  });

  it("prevents players leaving the bottom", function() {
    // TODO stop players reaching { y: >= height }
    var result = outOfBounds(0,101,100,100);
    assert.equal(result,true);
  });

  it("allows spaces within bounds", function() {
    // TODO allow players to reach spots within bounds
    var result = outOfBounds(0,10,100,100);
    assert.equal(result,false);
  });

});

