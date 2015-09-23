// on clear le loader
var loaderElement = document.getElementById('loader');
loaderElement.innerHTML = '';

var map, layer;

export var game = new Phaser.Game(1280, 720, Phaser.AUTO, loaderElement);

game.state.add('menu', require('states/menu'));
game.state.add('game', require('states/game'), true);
//game.state.start('game');
