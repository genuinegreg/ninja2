import {game} from 'game'

export default function create() {

  game.map = new game.Map('map:map:1');

  game.players = [
    new game.Player('red', 100),
    new game.Player('blue', 200),
    new game.Player('green', 300)
  ];

  game.cursors = game.input.keyboard.createCursorKeys();
};
