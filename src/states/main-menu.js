/*
 * ===========================================================================
 * File: main_menu.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

import Menu from 'gui/menu';
import Const from 'const';

class MainMenuState extends Phaser.State {
    constructor(game) {
        super(game);

    }

    create() {
        super.create();
        this.stage.backgroundColor = Const.COLOR_BLUE;

        this._menu = new Menu(this.game, 200, 300, [
            { text: '01 Game', fn: this._on01Game },
            { text: 'Countup', fn: this._onCountup },
            { text: 'Options', fn: this._onOptions },
            { text: 'Credits', fn: this._onCredit }
            ]);

        let title = this.add.sprite(200, 100, 'dart1');
        title.anchor.set(0.5); 

    }

    _on01Game(target) {
        // this.game.stage.disableVisibilityChange = false;
        target.game.state.start('play');
    }

    _onCountup(target) {
        // this.game.stage.disableVisibilityChange = false;
        target.game.state.start('play');
    }

    _onOptions() {        
    }

    _onCredit() {
        
    }
}

export default MainMenuState;

