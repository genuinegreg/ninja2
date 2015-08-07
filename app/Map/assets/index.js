import {game} from '../../game';

game.load.tilemap('map:map:1', require('./1.map.json'), null, Phaser.Tilemap.TILED_JSON)
game.load.image('map:tileset:basic', require('./basic.tileset.png'))
