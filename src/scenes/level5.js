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

    /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
    cursors

    constructor() {
        super("level5")
    }

    preload() {
        this.load.image("background", "assets/bg_layer1.png")

        // load the seaShell image
        this.load.image("seaShell", "assets/seaShell1.png")

        // load eagle player
        this.load.image("eagle-stand", "assets/eagle1.png")

        // load snake 
        this.load.image("snake-stand", "assets/snake1.png")

        this.load.image("seaShellMain", "assets/seaShellMain.png")

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create() {
        this.add.image(720, 512, "background")

        // create the group
        this.seaShells = this.physics.add.staticGroup()

        // create 3 seaShells from the group
        let positions = [];
        const leftBorder = 430;
        const rightBorder = 1000;
        const upBorder = 600;
        const downBorder = 860;

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
        this.snake = this.physics.add.sprite(680, 500, "snake-stand")
            .setScale(0.25)

        // create a seaShell sprite
        this.seaShellMain = this.physics.add.sprite(640, 550, "seaShellMain")
            .setScale(0.6)

    }

    update(t, d) {
        
    }
}