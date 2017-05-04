import Const from 'const';
class BootState extends Phaser.State {
    constructor(game) {
        super(game);
    }

    preload() {
        super.preload();

        this.load.image('loading-background', 'res/img/loading-background.png');
        this.load.image('loading-progress', 'res/img/loading-progress.png');
    }

    create() {
        super.create();
		this.stage.backgroundColor = Const.COLOR_STAGE_BG;
        this.state.start('loading');
    }
}

export default BootState;