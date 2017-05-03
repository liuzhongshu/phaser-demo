
class PlayState extends Phaser.State {
    constructor(game) {
        super(game);
    }

    create() {
        super.create();

        this.game.pauseSound = this.game.add.audio('pause');
        this.game.bumpSound = this.game.add.audio('bump');
        this.game.jumpSound = this.game.add.audio('jump');

        
    }
}

export default PlayState;
