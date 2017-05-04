import Const from 'const';

class InputBox extends Phaser.Sprite {
    constructor(game, x, y, w, h, options) {
        let bmd = new Phaser.BitmapData(game, '', w, h);
        super(game, x, y, bmd);

        this._canvasInput = new CanvasInput(_.extend({
          canvas: bmd.canvas,
          fontFamily: 'monospace',
          boxShadow: '0px 0px 0px #fff',
        }, options));

        this.inputEnabled = true;
        this.events.onInputUp.add(target => this._canvasInput.focus());
    }

    getValue() {
        return this._canvasInput.value();
    }

    destroy() {
        super.destroy();
        this._canvasInput.destroy();
    }
}

export default InputBox;