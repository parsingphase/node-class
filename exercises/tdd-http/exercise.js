var express = require("express");

var game = require("./game");


// TODO create server
var app = express();

// TODO export so we can test it
module.exports = app;

// TODO need to parse bodies
app.use(require('body-parser').json());

// TODO accept posts to /players
app.post('/players', function(req, res) {

  //res.type('json');

// TODO validate 'name' is present in body
  if (req.body.name) {
    //game.join(req.body, cb);
// TODO pass an object with following keys/values
// - name: name sent in post body
// validate the name is present
    game.join({name: req.body.name}, cb);
  } else {
    res.status(400).send(
      {error: 'missing name'}
    );
  }

// TODO handle errors from game.join
  function cb(error, data) {
    if (error) {
      res.status(500).send({error: 'internal error'});
    } else {
      res.send(data);
    }
  }
});


if (require.main === module) {
  main();
}

function main() {
  app.listen(3000, function() {
    console.log('listening');
  });
}
