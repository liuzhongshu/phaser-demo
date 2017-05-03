

class LoadingState extends Phaser.State {
    constructor(game) {
        super(game);
    }

    preload() {
        super.preload();

        this.load.image('title', 'res/img/title.png');
    }

    create() {
        super.create();

        this.state.start('mainMenu');
    }
}

export default LoadingState;
