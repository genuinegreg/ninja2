var g = require('./game')

var players = {

}

function create(name) {
  var player = g.add.sprite(100, 100, name);
  g.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  players[name] = player
}


function get(name) {
  return players[name];
}


module.exports = {
  create: create,
  get: get
}
