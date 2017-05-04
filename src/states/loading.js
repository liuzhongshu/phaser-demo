

class LoadingState extends Phaser.State {
    constructor(game) {
        super(game);
    }

    preload() {
        super.preload();


        var preloadBG = this.add.sprite((this.world.width-580)*0.5, (this.world.height+150)*0.5, 'loading-background');
        var preloadProgress = this.add.sprite((this.world.width-540)*0.5, (this.world.height+170)*0.5, 'loading-progress');
        this.load.setPreloadSprite(preloadProgress);
        this._loadResources();
    }

    _loadResources() {
        var pack = {
            'image': [
                ['dart1', 'res/img/dart1.png']                
            ],
            'spritesheet': [
                //['button-start', 'img/button-start.png', 180, 180],
            ],
            'audio': [
                //['audio-click', ['sfx/audio-button.m4a','sfx/audio-button.mp3','sfx/audio-button.ogg']],
                //['audio-theme', ['sfx/music-bitsnbites-liver.m4a','sfx/music-bitsnbites-liver.mp3','sfx/music-bitsnbites-liver.ogg']]
            ]
        };

        for(var method in pack) {
            pack[method].forEach(args => {
                var loader = this.load[method];
                loader.apply(this.load, args);
            }, this);
        }
    }

    create() {
        super.create();
        this.state.start('mainMenu');
    }
}

export default LoadingState;
