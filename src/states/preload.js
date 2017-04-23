/*
 * ===========================================================================
 * File: preload.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

import State from 'states/state';

class PreloadState extends State {
    constructor(game) {
        super(game);
    }

    preload() {
        super.preload();

        this.load.image('title', 'res/img/title.png');
        this.load.image('dialog', 'res/img/dialog.png');

        this.load.bitmapFont('plumber_bros', 'res/fonts/plumber_bros.png', 'res/fonts/plumber_bros.xml');

        // this.load.audio('bump', 'res/sounds/smb_bump.wav');
        // this.load.audio('jump', 'res/sounds/smb_jump-small.wav');
        // this.load.audio('pause', 'res/sounds/smb_pause.wav');
    }

    create() {
        super.create();

        this.state.start('mainMenu');
    }
}

export default PreloadState;
