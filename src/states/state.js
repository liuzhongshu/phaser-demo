/*
 * ===========================================================================
 * File: state.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

import KeyboardHandler from 'input/keyboard_handler';

class State extends Phaser.State {
    constructor(game) {
        super(game);

        //what is keyboard handler
        this.inputHandler = new KeyboardHandler();
    }

    create() {
        super.create();
        this.inputHandler.create(this.input);
    }

    shutdown() {
        this.sound.stopAll();
    }
}

export default State;

