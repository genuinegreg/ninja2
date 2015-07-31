module.exports = function update() {
  require('./game').physics.arcade.collide(
    require('./players').get('player:green'),
    require('./map'));
}
