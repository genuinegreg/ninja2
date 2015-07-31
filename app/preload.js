module.exports = function preload() {
  
  require('./game').load.image(
    'player:green',
    '../assets/players/green.png')

  require('./game').load.image(
    'ground',
    '../assets/players/blue.png');
}
