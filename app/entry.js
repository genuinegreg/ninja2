require('script!phaser');
require('file?name=index.html!./index.html')

require.ensure(
  ['./game'],
  function(require) {
    require('./game');
  }
);
