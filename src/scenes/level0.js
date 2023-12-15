import Phaser from "../lib/phaser.js";

export default class level0 extends Phaser.Scene {

    /** @type {Phaser.Physics.Arcade.Sprite} */
    iconEagle
    /** @type {Phaser.Physics.Arcade.Sprite} */
    iconTextBallon
    /** @type {Phaser.Physics.Arcade.Sprite} */
    buttonGuide

    /** @type {Phaser.Physics.Arcade.Sprite} */
    buttonConfig
    /** @type {Phaser.Physics.Arcade.Sprite} */
    buttonHome
    /** @type {Phaser.Physics.Arcade.Sprite} */
    buttonRestart
    /** @type {Phaser.Physics.Arcade.Sprite} */
    buttonSound
    /** @type {Phaser.Physics.Arcade.Sprite} */
    chromaticCircle
    /** @type {Phaser.Physics.Arcade.Sprite} */
    levelStatus

    constructor() {
        super("level0")
    }

    preload() {
        // load general assets
        this.load.image("button--config", "assets/general-assets/button--config.png")
        this.load.image("button--home", "assets/general-assets/button--home.png")
        this.load.image("button--restart", "assets/general-assets/button--restart.png")
        this.load.image("button--sound", "assets/general-assets/button--sound.png")
        this.load.image("chromatic-circle", "assets/general-assets/chromatic-circle.png")
        this.load.image("icon--eagle", "assets/general-assets/icon--eagle.png")
        this.load.image("icon--text-ballon", "assets/general-assets/icon--text-ballon.png")
        this.load.image("level-status", "assets/general-assets/level-status.png")
        this.load.image("button--guide", "assets/general-assets/button--guide.png")

        // load level 0 assets
        this.load.image("background", "assets/level0/bg_layer0.png")
    }

    create() {
         // Obtén la referencia al "background"
        const background = this.add.image(this.scale.width / 2, this.scale.height / 2, "background")
            .setScale(0.8);

        // GENERAL ASSETS
        this.iconEagle = this.physics.add.sprite(150, 350, "icon--eagle")
            .setScale(.8)
            .setInteractive();
        this.iconTextBallon = this.physics.add.sprite(150, 150, "icon--text-ballon")
            .setScale(.7)
            .setInteractive();
        this.buttonGuide = this.physics.add.sprite(150, 680, "button--guide")
            .setScale(.8)
            .setInteractive();

        this.buttonHome = this.physics.add.sprite(940, 630, "button--home")
            .setScale(1)
            .setInteractive();
        this.buttonSound = this.physics.add.sprite(1070, 630, "button--sound")
            .setScale(1)
            .setInteractive();
        this.buttonRestart = this.physics.add.sprite(940, 750, "button--restart")
            .setScale(1)
            .setInteractive();
        this.buttonConfig = this.physics.add.sprite(1070, 750, "button--config")
            .setScale(1)
            .setInteractive();
        this.chromaticCircle = this.physics.add.sprite(1000, 150, "chromatic-circle")
            .setScale(1)
            .setInteractive();
        this.levelStatus = this.physics.add.sprite(1000, 430, "level-status")
            .setScale(.8)
            .setInteractive();
    }

    update(t, d) {
        
    }
}