import {game} from '../game';
import './assets';

const MOVE_LEFT = -150;
const MOVE_RIGHT = 150;

export
default class Player {

  constructor(color = 'red', x = 100, y = 100) {
    this.sprite = game.add.sprite(x, y, `player:${color}`);


    //  We need to enable physics on the player
    game.physics.enable(this.sprite);

    //  Player physics properties. Give the little guy a slight bounce.
    this.sprite.body.bounce.y = 0;
    this.sprite.body.collideWorldBounds = true
  }

  update(left, right, up) {
    console.log(up, this.sprite.body.touching.down)


    this.sprite.body.velocity.x = 0;

    if (left && !right) {
      this.sprite.body.velocity.x = MOVE_LEFT;
    }
    else if (right && !left) {
      this.sprite.body.velocity.x = MOVE_RIGHT;
    }

    if (up && this.sprite.body.blocked.down) {

      this.sprite.body.velocity.y = -350;
    }
  }
}
