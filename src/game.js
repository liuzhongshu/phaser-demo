

import BootState from 'states/boot';
import LoadingState from 'states/loading';
import UserState from 'states/user';
import MainMenuState from 'states/main-menu';
import PlayState from 'states/play';
import Lang from 'lang';

class Game extends Phaser.Game {
    constructor() {
        //only CANVAS is compatible with canvas-input
        super(960, 540, Phaser.CANVAS, 'game');
    }

    boot() {
        super.boot();

        // if want  min-size, uncomment
        // this.scale.minWidth = this.width;
        // this.scale.minHeight = this.height;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.scale.scaleMode = this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        

        //only for old pixel art game
        //this.stage.smoothed = false;
        //this.renderer.renderSession.roundPixels = true;
        
        // capture certain keys to prevent their default actions in the browser.
        // this is only necessary because this is an HTML5 game.
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN
        ]);

        //set for Physics system
        //this.physics.startSystem(Phaser.Physics.ARCADE);
        
        //???
        ///this.input.maxPointers = 1;

        //phaser debug bar
        //this.add.plugin(Phaser.Plugin.Debug);

        this.config={};
    }

    start() {
        this.state.add('boot', BootState, true);
        this.state.add('loading', LoadingState, false);
        this.state.add('user', UserState, false);
        this.state.add('mainMenu', MainMenuState, false);
        this.state.add('play', PlayState, false);
        
        return this;
    }

   
    L(key) {
        if (Lang[key]) 
            return Lang[key][this.config.locale] || Lang[key][0];
        else
            return key;
    }


    
}

export default Game;
