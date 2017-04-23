
import Const from 'src/const';
import TextLabel from 'src/gui/text_label';

class TextButton extends TextLabel {
    constructor(game, x, y, text, parent, fixedToCam, callbackObj, centerText, align, size,
                overTint = Const.GOLD, outTint = 0xFFFFFF) {
        super(game, x, y, text, parent, fixedToCam, centerText, align, size);

        // enable input and setup callback events
        this.inputEnabled = true;
        this.events.onInputOver.add(f => this.tint = overTint);
        this.events.onInputOut.add(f => this.tint = outTint);
        this.events.onInputDown.add(callbackObj.fn, callbackObj.ctx);
    }
}

export default TextButton;

