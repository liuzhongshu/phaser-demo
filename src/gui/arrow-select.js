
import Const from 'const';
import TextButton from 'gui/text-button';


class ArrowSelect extends Phaser.Group {
    constructor(game, x, y, w, items, options) {
        super(game);

        this._current = 0;
        this._items = items;
        this._leftButton = new TextButton(this.game, x - w / 2, y + 10, '<', this._onLeft, this);
        this._rightButton = new TextButton(this.game, x + w / 2, y + 10, '>', this._onRight, this);
        this._label = new Phaser.Text(game, x, y, items[this._current], {fill: Const.COLOR_MENU_NORMAL});

        this.add(this._leftButton);
        this.add(this._rightButton);
        this.add(this._label);

    }

    _onLeft () {
        this._current --;
        if (this._current < 0)
            this._current = this._items.length -1;

        this._label.setText(this._items[this._current]);
    }

    _onRight () {
        this._current ++;
        if (this._current >= this._items.length)
            this._current = 0;

        this._label.setText(this._items[this._current]);
    }

}

export default ArrowSelect;

