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

    game.players = {
      red: new game.Player('red'),
      blue: new game.Player('blue', 200),
      green: new game.Player('green', 300),
    }
  },
  update: () => {
    game.physics.arcade.collide(game.players.red.sprite, game.map.layer);
    game.physics.arcade.collide(game.players.blue.sprite, game.map.layer);
    game.physics.arcade.collide(game.players.green.sprite, game.map.layer);

  },
  render: () => {
    // game.debug.body(p);
    game.debug.bodyInfo(game.players.red.sprite, 32, 320);
  }
});
