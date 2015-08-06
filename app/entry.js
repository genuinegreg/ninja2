require('script!../node_modules/phaser/build/phaser.min.js');
require('file?name=index.html!./index.html')

require.ensure(
  ['./game'],
  function(require) {
    require('./game');
  }
);
