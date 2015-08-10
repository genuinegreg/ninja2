import {game} from '../game';
import './assets';

const MOVE_MAX = 300;
const MOVE_INC = MOVE_MAX / 20;

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
    this.body = this.sprite.body;
    // this.body.gravity = 400;
    this.velocity = this.sprite.body.velocity;
  }

  moveLeft() {
    this.sprite.body.velocity.x = -MOVE_MAX;
  }

  moveRight() {
      this.sprite.body.velocity.x = +MOVE_MAX;
  }

  moveLeftInTheAir() {
    this.sprite.body.velocity.x -= MOVE_INC;
  }

  moveRightInTheAir() {
    this.sprite.body.velocity.x += MOVE_INC;
  }

  jump() {
    this.sprite.body.velocity.y = -800;
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
        this.velocity.x = 0;
      }

      if (left && !right) {
        this.moveLeft();
      }
      else if (right && !left) {
        this.moveRight();
      }

      if (up) {
        this.jump();
      }
    }
    else {
      if (left && !right) {
        this.moveLeftInTheAir()
      }
      else if (right && !left) {
        this.moveRightInTheAir()
      }

      if(up && this.sprite.body.blocked.left) {
        this.jumpRight();
      }
      else if (up && this.sprite.body.blocked.right) {
        this.jumpLeft();
      }
    }





  }
}
