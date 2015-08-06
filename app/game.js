
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
      game.players = {
        red: new game.Player('red'),
        blue: new game.Player('blue', 200),
        green: new game.Player('green', 300),
      }
    },
    update() {

    }
});
