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
        console.log("create");
        this.stage.backgroundColor = Const.COLOR_STAGE_BG;

        this._menu = new TextMenu(this.game, 200, 200, [
            { text: this.game.L('GAME01'), fn: this._on01Game},
            { text: this.game.L('CRICKET'), fn: this._onCricket },
            { text: this.game.L('COUNTUP'), fn: this._onCountup },
            { text: this.game.L('OTHERS'), fn: this._onOthers },
            { text: this.game.L('MATCH'), fn: this._onMatch },
            { text: this.game.L('ONLINE'), fn: this._onOnline }
            ], this);

        this._01menu = new TextMenu(this.game, 600, 200, [
            { text: '301', fn: this._on301 },
            { text: '501', fn: this._on501 },
            { text: '701', fn: this._on701 },
            { text: '901', fn: this._on901 }
            ], this);
        
        this._cricketMenu = new TextMenu(this.game, 600, 200, [
            { text: this.game.L('Standard Cr'), fn: this._onStdCr },
            { text: this.game.L('Add Cr'), fn: this._onAddCr }
            ], this);

        this._01menu.visible = false;
        this._cricketMenu.visible = false;

        let title = this.add.sprite(200, 100, 'dart1');
        title.anchor.set(0.5); 

        this.world.add(new TextButton(this.game, 800,30, this.game.config.account || 'login', 
            () => this.game.state.start('user')));

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

