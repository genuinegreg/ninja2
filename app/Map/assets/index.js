import {game} from '../../game';


game.load.image('map:tileset:basic', require('./basic.tileset.png'))
export var tilesets = {
  'map:tileset:basic': {
    name: 'map:tileset:basic',
    collides: require('./basic.tileset.json').collides
  }
}

// load map1
game.load.tilemap('map:map:1', require('./1.map.json'), null, Phaser.Tilemap.TILED_JSON)
export var tilemaps = {
  'map:map:1': {
    name: 'Map ',
    background: '#FFF',
    gravity: 1200,
    layer: 'layer1',
    tilesets: {
      'basic': tilesets['map:tileset:basic']
    }
  }
}
