
export var game =  new Phaser.Game(1280, 720, Phaser.AUTO, '', {
  preload() {
    game.Player = require('./Player');
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
