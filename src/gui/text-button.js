import Const from 'const';

class TextButton extends Phaser.Text {
    constructor(game, x, y, text, callback, style) {
        super(game, x, y, text, _.extend({fill: 'white'}, style));
        
        //center align
        this.anchor.x = Math.round(this.width * 0.5) / this.width;
        this.anchor.y = Math.round(this.height * 0.5) / this.height;
        
		//for this Game Object and it will then start to process click / touch events and more.
        this.inputEnabled = true;
        this.events.onInputOver.add(target => target.setStyle(_.extend(target.style, {fill: Const.COLOR_GOLD})));
        this.events.onInputDown.add(target => target.setStyle(_.extend(target.style, {fill: Const.COLOR_GOLD})));
        this.events.onInputOut.add(target => target.setStyle(_.extend(target.style, {fill: 'white'})));
        
        this.events.onInputUp.add(callback);
    }
}

export default TextButton;