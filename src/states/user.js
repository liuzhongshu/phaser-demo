import Const from 'const';
import TextButton from 'gui/text-button';
import InputBox from 'gui/input-box';
import ArrowSelect from 'gui/arrow-select';

class UserState extends Phaser.State {
    constructor(game) {
        super(game);
    }

    create() {
        super.create();
		this.stage.backgroundColor = Const.COLOR_STAGE_BG;

        if (this.game.config.account) {
            this._locale = new ArrowSelect(this.game, 100,100, 150, [
                {label:'English', value:0},
                {label:'中文', value:1}
                ], {current: this.game.config.locale || 0 }
            );

            this.world.add(new TextButton(this.game, 100,200, 'ok', () => {
                this.game.config.locale = this._locale.getValue();
                this.game.state.start('mainMenu');
            }));            

            this.world.add(new TextButton(this.game, 300,200, 'logout', () => {
                this.game.config.account = null;
                this.game.state.start('mainMenu');
            }));            
        }
        else {            
            this._inputUser = new InputBox(this.game, 100, 20, 200, 30, {
                placeHolder:'account'});
            this._inputPass = new InputBox(this.game, 100, 55, 200, 30, {
                password:true
            });

            this.world.add(this._inputUser);
            this.world.add(this._inputPass);
            this.world.add(new TextButton(this.game, 100,200, 'login', () => {
                this.game.config.account = this._inputUser.getValue();
                this.game.config.password = this._inputPass.getValue();
                this.game.state.start('mainMenu');
            }));            
        }
        
    }


}

export default UserState;
