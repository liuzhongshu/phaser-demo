

import PreloadState from 'states/preload';
import MainMenuState from 'states/main_menu';
import PlayState from 'states/play';

class Game extends Phaser.Game {
    constructor() {
        super(960, 540, Phaser.AUTO, 'game', null, false, false);

        this.isPaused = false;
    }

    boot() {
        super.boot();

        // if want  min-size, uncomment
        // this.scale.minWidth = this.width;
        // this.scale.minHeight = this.height;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.scale.scaleMode = this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.renderer.renderSession.roundPixels = true;
        this.stage.smoothed = false;

        // capture certain keys to prevent their default actions in the browser.
        // this is only necessary because this is an HTML5 game.
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN
        ]);

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.input.maxPointers = 1;

        //phaser debug bar
        //this.add.plugin(Phaser.Plugin.Debug);
    }

    start() {
        this.state.add('preload', PreloadState, true);
        this.state.add('mainMenu', MainMenuState, false);
        this.state.add('play', PlayState, false);
        
        return this;
    }

   

    
}

export default Game;
