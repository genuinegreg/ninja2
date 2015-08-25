import {game} from 'game'

export default function update() {
  game.players.forEach((player, key) => {
    game.physics.arcade.collide(player.sprite, game.map.layer);
    player.update(game.cursors.left.isDown, game.cursors.right.isDown, game.cursors.up.isDown && game.cursors.up.repeats < 1);
  });
}
