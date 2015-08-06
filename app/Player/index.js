import {game} from '../game';
import './assets';

console.log('Player loaded');

export
default class Player {
  constructor(color = 'red', x = 100, y = 100) {
    this.sprite = game.add.sprite(x, y, `player:${color}`);


    //  We need to enable physics on the player
    game.physics.arcade.enable(this.sprite);

    //  Player physics properties. Give the little guy a slight bounce.
    this.sprite.body.bounce.y = 0.2;
    this.sprite.body.gravity.y = 300;
    this.sprite.body.collideWorldBounds = true
  }
}
