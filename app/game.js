
console.log('create game...')


module.exports = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: require('./preload'),
  create: require('./create'),
  update: require('./update')
});

// module.exports = game;

console.log('create game... OK')
