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

        this._inputUser = new InputBox(this.game, 100, 10, 400, 30, {
            placeHolder:'account'});
        this._inputPass = new InputBox(this.game, 100, 40, 400, 30, {
            password:true
        });

        this._locale = new ArrowSelect(this.game, 100,70, 200, ['zh-CN','en-US']);

        this.world.add(this._inputUser);
        this.world.add(this._inputPass);

        this.world.add(new TextButton(this.game, 100,200, 'login', () => {
            this.game.config.account = this._inputUser.getValue();
            this.game.config.password = this._inputPass.getValue();
            this.game.state.start('mainMenu');
        }));
    }


}

export default UserState;