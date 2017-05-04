/*
 *  Main menu for game
 */

import TextMenu from 'gui/text-menu';
import TextButton from 'gui/text-button';
import Const from 'const';

class MainMenuState extends Phaser.State {
    constructor(game) {
        super(game);

    }

    create() {
        super.create();
        this.stage.backgroundColor = Const.COLOR_STAGE_BG;

        this._menu = new TextMenu(this.game, 200, 200, [
            { text: '01GAME', fn: this._on01Game},
            { text: 'CRICKET', fn: this._onCricket },
            { text: 'COUNTUP', fn: this._onCountup },
            { text: 'OTHERS', fn: this._onOthers },
            { text: 'MATCH', fn: this._onMatch },
            { text: 'ONLINE', fn: this._onOnline }
            ], this);

        this._01menu = new TextMenu(this.game, 600, 200, [
            { text: '301', fn: this._on301 },
            { text: '501', fn: this._on501 },
            { text: '701', fn: this._on701 },
            { text: '901', fn: this._on901 }
            ], this);
        
        this._cricketMenu = new TextMenu(this.game, 600, 200, [
            { text: 'Standard Cr', fn: this._onStdCr },
            { text: 'Add Cr', fn: this._onAddCr }
            ], this);

        this._01menu.visible = false;
        this._cricketMenu.visible = false;

        let title = this.add.sprite(200, 100, 'dart1');
        title.anchor.set(0.5); 

        this.world.add(new TextButton(this.game, 500,10, 'login', () => this.game.state.start('user')));

    }

    _on01Game() {
        this._cricketMenu.visible = false;
        this._01menu.visible = true;
    }

    _onCricket() {
        this._01menu.visible = false;        
        this._cricketMenu.visible = true;
    }

    _onCountup() {        
    }

    _onOthers() {        
    }

    _onMatch() {        
    }

    _onOnline() {        
    }

    _on301() {
        this.game.config.gameType = Const.GAME_301;
        this.game.state.start('play');
    }

    _on501() {
        this.game.config.gameType = Const.GAME_501;
        //this.game.config.roundSetting= 10;
        this.game.state.start('play');
    }

    _on701() {
        this.game.config.gameType = Const.GAME_701;
        this.game.state.start('play');
    }

    _on901() {
    }

    _onStdCr() {
    }

    _onAddCr() {
    }
}

export default MainMenuState;

