

class LoadingState extends Phaser.State {
    constructor(game) {
        super(game);
    }

    preload() {
        super.preload();

        this.load.image('dart1', 'res/img/dart1.png');
    }

    create() {
        super.create();

        this.state.start('mainMenu');
    }
}

export default LoadingState;
