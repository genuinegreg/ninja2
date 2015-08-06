import {game} from '../game';
import './assets';

console.log('Player loaded');

export default class Player {
  constructor(color = 'red', x = 100, y = 100) {
    this.sprite = game.add.sprite(x, y, `player:${color}`);
  }
}
