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
  },
  update: () => {
    game.players.forEach((player, key) => {
      console.log(player)
      game.physics.arcade.collide(player.sprite, game.map.layer);
    });
  },
  render: () => {
    // game.debug.body(p);
    game.debug.bodyInfo(game.players[0].sprite, 32, 320);
  }
});
