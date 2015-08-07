
// on clear le loader
var loaderElement = document.getElementById('loader');
loaderElement.innerHTML = '';

export
var game = new Phaser.Game(1280, 720, Phaser.AUTO, loaderElement, {
  preload() {
      game.Player = require('./Player');
      game.Map = require('./Map')
    },
    create() {

      game.stage.backgroundColor = '#FFF';

      var map = game.add.tilemap('map:map:1');
      map.addTilesetImage('tileset1', 'map:tileset:basic');
      var layer = map.createLayer('layer1');
      // layer.resizeWorld();

      game.players = {
        red: new game.Player('red'),
        blue: new game.Player('blue', 200),
        green: new game.Player('green', 300),
      }
    },
    update() {

    }
});
