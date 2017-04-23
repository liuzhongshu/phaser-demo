/*
 * ===========================================================================
 * File: play.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

import State from 'states/state';

class PlayState extends State {
    constructor(game) {
        super(game);
    }

    create() {
        super.create();

        this.game.pauseSound = this.game.add.audio('pause');
        this.game.bumpSound = this.game.add.audio('bump');
        this.game.jumpSound = this.game.add.audio('jump');

        
    }
}

export default PlayState;
