var game = require("./game");

// export a single middleware functions as the module
//
// game.getPlayer's callback API is (err, player)
//
// it should call game.getPlayer(id, callback)
// - on error, send 401 and a json error, ending the chain
// - on success, set res.locals.player to the player
//
// - ensure to keep the chain going if there is no error
module.exports = function authenticate(req, res, next) {
  // TODO success: augment res.locals
  var playerId = req.session.playerId;
  game.getPlayer(playerId, cb);

  function cb(error, player) {
    if (error) {
      // TODO error: send 401 + json
      res.status(401).send({error: 'No player'});
    } else {
      // TODO success: keep chain
      res.locals.player = player;
      next();
    }
  }
};
