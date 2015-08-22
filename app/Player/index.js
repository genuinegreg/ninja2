import {
  game
}
from '../game';
import './assets';

const MOVE_MAX = 300;
const MOVE_INC = MOVE_MAX / 10;

export
default class Player {

  constructor(color = 'red', x = 100, y = 100) {
    // this.sprite = game.add.sprite(x, y, `player:${color}`);

    // var plop = [for (i of Array(100).keys()) i];
    // console.log(plop)

    console.log('load player', color);

    this.sprite = game.add.sprite(x, y, 'player:' + color +':spritesheet')
    // this.sprite.body.height = 60;
    // this.sprite.body.width = 40;

    this.sprite.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 30, true);
    this.sprite.animations.add('jump', [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 30, false);
    this.sprite.animations.add('land', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], 30, false);
    this.sprite.animations.add('walk', [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59], 30, true);
    this.sprite.animations.play('idle')

    //  We need to enable physics on the player
    game.physics.enable(this.sprite);

    //  Player physics properties. Give the little guy a slight bounce.
    this.sprite.body.bounce.y = 0;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.maxVelocity = new Phaser.Point(MOVE_MAX, MOVE_MAX * 2);
    this.body = this.sprite.body;
    // this.body.gravity = 400;
    this.velocity = this.sprite.body.velocity;
  }

  moveLeft() {
    this.sprite.body.velocity.x = -MOVE_MAX;
    this.sprite.animations.play('walk');
  }

  moveRight() {
    this.sprite.body.velocity.x = +MOVE_MAX;
    this.sprite.animations.play('walk');
  }

  stop() {
    if (this.velocity.x < -MOVE_INC) {
      this.velocity.x += MOVE_INC;
    } else if (this.velocity.x > MOVE_INC) {
      this.velocity.x -= MOVE_INC;
    } else {
      this.velocity.x = 0;
    }

    this.sprite.animations.play('idle');
  }

  moveLeftInTheAir() {
    this.sprite.body.velocity.x -= MOVE_INC;
  }

  moveRightInTheAir() {
    this.sprite.body.velocity.x += MOVE_INC;
  }

  jump() {
    this.sprite.body.velocity.y = -800;
    this.sprite.animations.play('jump');
  }

  jumpLeft() {
    this.moveLeft()
    this.jump();
  }

  jumpRight() {
    this.moveRight()
    this.jump();
  }

  update(left, right, up) {

    if (this.sprite.body.blocked.down) {
      if (!left && !right || left && right) {
        this.stop();
      }

      if (left && !right) {
        this.moveLeft();
      } else if (right && !left) {
        this.moveRight();
      }

      if (up) {
        this.jump();
      }
    } else {

      if (!left && !right || left && right) {
        if (this.velocity.x < -MOVE_INC) {
          this.velocity.x += MOVE_INC / 5;
        } else if (this.velocity.x > MOVE_INC) {
          this.velocity.x -= MOVE_INC / 5;
        } else {
          this.velocity.x = 0;
        }
      }


      if (left && !right) {
        this.moveLeftInTheAir()
      } else if (right && !left) {
        this.moveRightInTheAir()
      }

      if (up && this.sprite.body.blocked.left) {
        this.jumpRight();
      } else if (up && this.sprite.body.blocked.right) {
        this.jumpLeft();
      }
    }





  }
}
