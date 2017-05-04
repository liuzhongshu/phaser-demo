import Const from 'const';

class PlayState extends Phaser.State {
    constructor(game) {
        super(game);
    }

    create() {
        super.create();
		this.stage.backgroundColor = Const.COLOR_STAGE_BG;

        //this.game.pauseSound = this.game.add.audio('pause');
        //this.game.bumpSound = this.game.add.audio('bump');
        //this.game.jumpSound = this.game.add.audio('jump');

        this.add.text(100, 100, this.game.config.gameType);
        this.world.add(new TextButton(this.game, 100,400, 'End game', () => this.game.state.start('mainMenu')));
    }
}

export default PlayState;
