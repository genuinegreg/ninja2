module.exports = function create() {

  var g = require('./game');

  g.physics.startSystem(Phaser.Physics.ARCADE);


  require('./map');
  require('./players').create('player:green');


}
