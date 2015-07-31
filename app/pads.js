var game = require('./game');


game.input.gamepad.start();

// To listen to buttons from a specific pad listen directly on that pad game.input.gamepad.padX, where X = pad 1-4
var pad1 = game.input.gamepad.pad1;

game.input.onDown.add(dump, this);

function dump() {

    console.log(pad1._axes[0]);
    console.log(pad1._rawPad.axes[0]);

}


module.exports = function updatePlayer(player) {

    // // Controls
    // if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)
    // {
    //     sprite.x--;
    // }
    // else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)
    // {
    //     sprite.x++;
    // }
    //
    // if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1)
    // {
    //     sprite.y--;
    // }
    // else if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1)
    // {
    //     sprite.y++;
    // }

    // if (pad1.justPressed(Phaser.Gamepad.XBOX360_A))
    // {
    //     sprite.angle += 5;
    // }
    //
    // if (pad1.justReleased(Phaser.Gamepad.XBOX360_B))
    // {
    //     sprite.scale.x += 0.01;
    //     sprite.scale.y = sprite.scale.x;
    // }

    if (pad1.connected)
    {
        var rightStickX = pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X);
        var rightStickY = pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y);

        if (rightStickX)
        {
            player.x += rightStickX * 10;
        }

        if (rightStickY)
        {
            player.y += rightStickY * 10;
        }
    }
}
