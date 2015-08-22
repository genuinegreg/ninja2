require('script!../node_modules/phaser/build/custom/phaser-arcade-physics.min.js');
require('file?name=index.html!./index.html')

require.ensure(
  ['./game'],
  function(require) {
    require('./game');
  }
);
