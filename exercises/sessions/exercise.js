var express = require("express");

var app = express();

app.use(require("body-parser").json());

// TODO setup session handling with the 'express-session'
// module
var session = require("express-session");
//app.use(session({ secret: 'asdjalksjd', resave: true, cookie: { maxAge: 60000 }}));
app.use(session({secret: process.env.SECRET})); // only 'secret' is actually required

// TODO handle POST to /note
// with body of { text: "" }, store the body in the session
app.post('/note', function(req, res) {
  req.session.note = req.body.text;
  res.send({});
});

// TODO handle GET /note
// - if note is in session, respond with { text: "" }
// - else, respond with { error: "some error" } and a 404
app.get('/note', function(req, res) {
  if (req.session.note) {
    res.send({text: req.session.note});
  } else {
    res.status(500).send({error: 'nothing to return'});
  }
});

module.exports = app;

