import {game} from '../game';
import {tilemaps} from './assets';


export default class Map {
  constructor(name) {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = tilemaps[name].gravity;
    game.stage.backgroundColor = tilemaps[name].background;

    this.tilemap = game.add.tilemap(name);


    // loading tileset & collides map
    Object.keys(tilemaps[name].tilesets).map((key) => {
      this.tilemap.addTilesetImage(key, tilemaps[name].tilesets[key].name);
      this.layer = this.tilemap.createLayer(tilemaps[name].layer);

      this.tilemap.setCollision(tilemaps[name].tilesets[key].collides)

    })
  }
}
