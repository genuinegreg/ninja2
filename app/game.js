// on clear le loader
var loaderElement = document.getElementById('loader');
loaderElement.innerHTML = '';

var map, layer;

export
var game = new Phaser.Game(1280, 720, Phaser.AUTO, loaderElement, {
  preload: () => {
    game.Player = require('./Player');
    game.Map = require('./Map')
  },
  create: () => {

    game.map = new game.Map('map:map:1');

    game.players = [
      new game.Player('red'),
      new game.Player('blue', 200),
      new game.Player('green', 300),
    ]

    game.cursors = game.input.keyboard.createCursorKeys();
  },
  update: () => {
    game.players.forEach((player, key) => {
      game.physics.arcade.collide(player.sprite, game.map.layer);
      console.log(game.cursors.up.isDown, game.cursors.up.repeats)
      player.update(game.cursors.left.isDown, game.cursors.right.isDown, game.cursors.up.isDown && game.cursors.up.repeats < 1);
    });
  },
  render: () => {
    // game.debug.body(p);
    game.debug.bodyInfo(game.players[2].sprite, 32, 320);
  }
});
