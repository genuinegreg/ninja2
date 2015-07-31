module.exports = function update() {

  var g = require('./game');
  var players = require('./players');
  var map = require('./map')
  g.physics.arcade.collide(players.get('player:green'), map);

  //  Reset the players velocity (movement)
  players.get('player:green').body.velocity.x = 0;

  require('./pads')(players.get('player:green'));

}
