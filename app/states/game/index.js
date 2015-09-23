import {game} from 'game';


export default {
  preload: require('./preload'),
  create: require('./create'),
  update: require('./update'),
  render: () => {
    // game.debug.body(p);
    //game.debug.bodyInfo(game.players[2].sprite, 32, 320);
  }
};
