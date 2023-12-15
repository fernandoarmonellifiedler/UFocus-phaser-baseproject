import Phaser from "../lib/phaser.js";

export default class level5 extends Phaser.Scene {

    /** @type {Phaser.Physics.Arcade.StaticGroup} */
    seaShells

    /** @type {Phaser.Physics.Arcade.Sprite} */
    player

    /** @type {Phaser.Physics.Arcade.Sprite} */
    snake

    /** @type {Phaser.Physics.Arcade.Sprite} */
    seaShellMain

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
        super("level5")
    }

    preload() {
        // load general assets
        this.load.image("button--config", "assets/level5/button--config.png")
        this.load.image("button--home", "assets/level5/button--home.png")
        this.load.image("button--restart", "assets/level5/button--restart.png")
        this.load.image("button--sound", "assets/level5/button--sound.png")
        this.load.image("chromatic-circle", "assets/level5/chromatic-circle.png")
        this.load.image("icon--eagle", "assets/level5/icon--eagle.png")
        this.load.image("icon--text-ballon", "assets/level5/icon--text-ballon.png")
        this.load.image("level-status", "assets/level5/level-status.png")
        this.load.image("button--guide", "assets/level5/button--guide.png")

        // load level 5 assets
        this.load.image("background", "assets/level5/bg_layer1.png")

        // load the seaShell image
        this.load.image("seaShell", "assets/level5/seaShell1.png")

        // load eagle player
        this.load.image("eagle-stand", "assets/level5/eagle1.png")

        // load snake 
        this.load.image("snake-stand", "assets/level5/snake1.png")

        this.load.image("seaShellMain", "assets/level5/seaShellMain.png")
    }

    create() {
         // Obtén la referencia al "background"
        const background = this.add.image(this.scale.width / 2, this.scale.height / 2, "background")
            .setScale(0.8);

        // GENERAL ASSETS
        this.iconEagle = this.physics.add.sprite(150, 300, "icon-eagle")
            .setScale(4)
            .setInteractive();
        this.iconTextBallon = this.physics.add.sprite(150, 150, "icon--text-ballon")
            .setScale(4)
            .setInteractive();
        this.buttonGuide = this.physics.add.sprite(150, 680, "button--guide")
            .setScale(4)
            .setInteractive();

        this.buttonHome = this.physics.add.sprite(940, 630, "button--home")
            .setScale(2)
            .setInteractive();
        this.buttonSound = this.physics.add.sprite(1070, 630, "button--sound")
            .setScale(2)
            .setInteractive();
        this.buttonRestart = this.physics.add.sprite(940, 730, "button--restart")
            .setScale(2)
            .setInteractive();
        this.buttonConfig = this.physics.add.sprite(1070, 730, "button--config")
            .setScale(2)
            .setInteractive();
        this.chromaticCircle = this.physics.add.sprite(1000, 150, "chromatic-circle")
            .setScale(6)
            .setInteractive();
        this.levelStatus = this.physics.add.sprite(1000, 430, "level-status")
            .setScale(2)
            .setInteractive();

        // LEVEL5 ASSETS
        // create the group
        this.seaShells = this.physics.add.staticGroup()

        // create 3 seaShells from the group
        let positions = [];
        // Calcula los límites en función del tamaño y la posición del "background"
        const leftBorder = (background.x - background.displayWidth / 2) + 50;
        const rightBorder = (background.x + background.displayWidth / 2) - 50;
        const upBorder = (this.scale.width / 2) - 75;
        const downBorder = (background.y + background.displayHeight / 2) - 50;

        let i = 0;
        while (positions.length < 3) {
            let x = Phaser.Math.Between(leftBorder, rightBorder);
            let y = Phaser.Math.Between(upBorder, downBorder);

            if (!checkOverlap(x, y, positions)) {
                positions.push({x: x, y: y});

                /** @type {Phaser.Physics.Arcade.Sprite} */
                const seaShell = this.seaShells.create(x, y, "seaShell")
                seaShell.scale = 0.6

                // Add a label to the seaShell
                const label = this.add.text(x, y, (i+1).toString(), { fontSize: '32px', fill: '#000' });
                this.seaShells.add(label);

                /** @type {Phaser.Physics.Arcade.StaticBody} */
                const body = seaShell.body
                body.updateFromGameObject()

                i++
            }

            function checkOverlap(x, y, positions) {
                const tolerance = 70; // Define your own tolerance
                for (let pos of positions) {
                    if (Math.abs(pos.x - x) < tolerance && Math.abs(pos.y - y) < tolerance) {
                        return true;
                    }
                }
                return false;
            }
        }

        // modal when clicking a seaShell
        this.seaShells.children.iterate(child => {
            child.setInteractive(); // Make each seaShell interactive
            child.on('pointerdown', () => {
                this.scene.pause(); // Pause the current scene
                this.scene.launch('ModalScene'); // Launch the modal scene
            });
        });

        // create a snake sprite
        this.snake = this.physics.add.sprite(550, 400, "snake-stand")
            .setScale(0.20)

        // create a seaShell sprite
        this.seaShellMain = this.physics.add.sprite(520, 430, "seaShellMain")
            .setScale(0.6)
    }

    update(t, d) {
        
    }
}