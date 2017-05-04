import Const from 'const';
import TextButton from 'gui/text-button';

class PlayState extends Phaser.State {
    constructor(game) {
        super(game);
    }

    create() {
        super.create();
		this.stage.backgroundColor = Const.COLOR_STAGE_BG;

        this.add.text(100, 100, this.game.config.gameType);
        this.world.add(new TextButton(this.game, 100,400, 'End game', () => this.game.state.start('mainMenu')));
    }
}

export default PlayState;
