
import Const from 'const';
import TextButton from 'gui/text-button';


class Menu extends Phaser.Group {
    constructor(game, x, y, items) {
        super(game);
        this._addMenuItems(x,y,items);
    }

    _addMenuItems(x, y, items) {
        var yPos = y;
        for (var i = 0, l = items.length; i < l; i++) {
            let item = items[i];

            let textButton = new TextButton(this.game, x, yPos, item.text, item.fn);
            yPos += textButton.height * 1;
            this.add(textButton);
        }
    }
}

export default Menu;

