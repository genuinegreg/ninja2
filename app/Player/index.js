import {game} from '../game';
import './assets';

const MOVE_MAX = 200;
const MOVE_INC = MOVE_MAX / 10;

export
default class Player {

  constructor(color = 'red', x = 100, y = 100) {
    this.sprite = game.add.sprite(x, y, `player:${color}`);


    //  We need to enable physics on the player
    game.physics.enable(this.sprite);

    //  Player physics properties. Give the little guy a slight bounce.
    this.sprite.body.bounce.y = 0;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.maxVelocity = new Phaser.Point(MOVE_MAX, MOVE_MAX*2);
    this.velocity = this.sprite.body.velocity;
  }

  update(left, right, up) {

    if (this.sprite.body.blocked.down) {
      if (!left && !right || left && right) {
        this.velocity.x = 0;
      }

      if (left && !right) {
        this.sprite.body.velocity.x = -MOVE_MAX;
      }
      else if (right && !left) {
        this.sprite.body.velocity.x = +MOVE_MAX;
      }

      if (up) {
        this.sprite.body.velocity.y = -400;
      }
    }
    else {
      if (left && !right) {
        this.sprite.body.velocity.x -= MOVE_INC;
      }
      else if (right && !left) {
        this.sprite.body.velocity.x += MOVE_INC;
      }
    }





  }
}
