import {game} from '../../game';

game.load.image(
  'player:green',
  require('./green.png'));
game.load.image(
  'player:blue',
  require('./blue.png'));
game.load.image(
  'player:red',
  require('./red.png'));




game.load.atlasJSONHash(
  'player:blue:spritesheet',
  require('./bluePlayer/spritesheet.png'),
  require('./bluePlayer/blue.atlas.json'))
