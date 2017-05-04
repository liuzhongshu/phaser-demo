
import Const from 'const';
import TextButton from 'gui/text-button';


class TextMenu extends Phaser.Group {
    constructor(game, x, y, items, context) {
        super(game);
        this._addMenuItems(x,y,items, context);
    }

    _addMenuItems(x, y, items, context) {
        var yPos = y;
        for (var i = 0, l = items.length; i < l; i++) {
            let item = items[i];

            let textButton = new TextButton(this.game, x, yPos, item.text, item.fn, context);
            yPos += textButton.height * 1;
            this.add(textButton);
        }
    }
}

export default TextMenu;

