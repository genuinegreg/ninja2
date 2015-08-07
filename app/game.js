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

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 300;

    game.stage.backgroundColor = '#FFF';

    map = game.add.tilemap('map:map:1');
    map.addTilesetImage('tileset1', 'map:tileset:basic');
    layer = map.createLayer('layer1');
    // layer.resizeWorld();

    map.setCollision(1);

    game.players = {
      red: new game.Player('red'),
      blue: new game.Player('blue', 200),
      green: new game.Player('green', 300),
    }
  },
  update: () => {
    game.physics.arcade.collide(game.players.red.sprite, layer);
    game.physics.arcade.collide(game.players.blue.sprite, layer);
    game.physics.arcade.collide(game.players.green.sprite, layer);

  },
  render: () => {
    // game.debug.body(p);
    game.debug.bodyInfo(game.players.red.sprite, 32, 320);
  }
});
