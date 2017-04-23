/*
 * ===========================================================================
 * File: main_menu.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
 */

import Menu from 'states/menu';
import MsgDialog from 'gui/msg_dialog';
import OptionsDialog from 'gui/options_dialog';
import Const from 'const';

class MainMenuState extends Menu {
    constructor(game) {
        super(game);

        this._menuItemsActive = false;
    }

    create() {
        super.create();

        this._addMenuItems([
            { text: '01 Game', fn: this._on01Game, ctx: this  },
            { text: 'Countup', fn: this._onCountup, ctx: this  },
            { text: 'Options', fn: this._onOptions, ctx: this  },
            { text: 'Credits', fn: this._onCredit, ctx: this  }
        ]);

        this._msgDialog = new MsgDialog(this.game, this, Const.MAINMENU_DIALOG_TITLE, 'close', Const.MAINMENU_DIALOG_MSG, null);
        this._optionsDialog = new OptionsDialog(this.game, this);
    }

    _on01Game() {
        // this.game.stage.disableVisibilityChange = false;
        this.state.start('play');
    }

    _onCountup() {
        // this.game.stage.disableVisibilityChange = false;
        this.state.start('play');
    }

    _onOptions() {
        this._optionsDialog.show();
    }

    _onCredit() {
        this._msgDialog.show();
    }
}

export default MainMenuState;

