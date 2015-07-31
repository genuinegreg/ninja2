var g = require('./game');

var map = g.add.group();
map.enableBody = true;

// Here we create the ground.
var ground = map.create(0, g.world.height - 40, 'ground');

//  Scale it to fit the width of the game (the original sprite is 400x32 in size)
ground.scale.setTo(30, 30);

//  This stops it from falling away when you jump on it
ground.body.immovable = true;

// //  Now let's create two ledges
// var ledge = map.create(400, 400, 'ground');
//
// ledge.body.immovable = true;
//
// ledge = map.create(-150, 250, 'ground');
//
// ledge.body.immovable = true;

module.exports = map
