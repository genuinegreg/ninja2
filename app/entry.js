require('script!../node_modules/phaser/build/phaser.min.js');

require.ensure(
  ['./game'],
  function(require) {
    require('./game');
  }
);
