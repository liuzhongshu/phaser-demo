import Const from 'const';
import TextButton from 'gui/text-button';

class UserState extends Phaser.State {
    constructor(game) {
        super(game);
    }

    create() {
        super.create();
		this.stage.backgroundColor = Const.COLOR_STAGE_BG;
        this._inputUser = this.createInput(100,10, 'account');
        this._inputPass = this.createInput(100,40, 'password');

        this.world.add(new TextButton(this.game, 100,100, 'login', () => this.game.state.start('mainMenu')));
    }

    createInput(x, y, hint) {
        //bmd is container
        var bmd = this.add.bitmapData(400, 50);    
        var myInput = this.game.add.sprite(x, y, bmd);
        
        myInput.canvasInput = new CanvasInput({
          canvas: bmd.canvas,
          placeHolder: hint
        });

        myInput.inputEnabled = true;
        myInput.events.onInputUp.add(target => target.canvasInput.focus());
        
        return myInput;
      }

      shutdown() {
        this._inputUser.canvasInput.destroy();
        this._inputPass.canvasInput.destroy();
      }
}

export default UserState;
