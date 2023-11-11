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
        this.add.image(550, 320, "background")
            .setScale(0.53)

        // create the group
        this.seaShells = this.physics.add.staticGroup()

        // create 3 seaShells from the group
        for (let i = 0; i < 3; i++) {
            const x = Phaser.Math.Between(328, 772)
            const y = Phaser.Math.Between(350, 400)

            /** @type {Phaser.Physics.Arcade.Sprite} */
            const seaShell = this.seaShells.create(x, y, "seaShell")
            seaShell.scale = 0.5

            /** @type {Phaser.Physics.Arcade.StaticBody} */
            const body = seaShell.body
            body.updateFromGameObject()
        }

        // create a eagle sprite
        this.player = this.physics.add.sprite(540, 520, "eagle-stand")
            .setScale(0.15)
            .setInteractive()
            .setCollideWorldBounds(true); // Enable collision with world bounds for the eagle

        // Now we'll set up a function to run whenever the player collides with the world bounds
        this.player.body.onWorldBounds = true; // Enable the onWorldBounds event for this body

        this.player.body.world.on('worldbounds', function(body) {
            // Check if the body's game object is the one you're interested in
            if (body.gameObject === this) {
                this.setVelocityX(0);
            }
        }, this.player);


        this.input.on('pointermove', (pointer) => {
            let angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, pointer.x, pointer.y);
            this.physics.velocityFromAngle(Phaser.Math.RadToDeg(angle), 200, this.player.body.velocity);
        });

        // create a snake sprite
        this.snake = this.physics.add.sprite(640, 150, "snake-stand")
            .setScale(0.15)

        // create a seaShell sprite
        this.seaShellMain = this.physics.add.sprite(620, 180, "seaShellMain")
            .setScale(0.5)

        this.physics.add.collider(this.seaShells, this.player)

    }

    update(t, d) {
        this.seaShells.children.iterate(child => {
            /** @type {Phaser.Physics.Arcade.Sprite} */
            const seaShell = child

            const scrollY = this.cameras.main.scrollY
            if (seaShell.y >= scrollY + 700) {
                seaShell.y = scrollY - Phaser.Math.Between(50, 100)
                seaShell.body.updateFromGameObject()

            }
        })

        // restrict player movement to main scene
        const leftLimit = 335;
        const rightLimit = 690;

        // left and right input logic
        if (this.cursors.left.isDown && this.player.body.x > leftLimit) {
            this.player.setVelocityX(-200)
        }
        else if (this.cursors.right.isDown && this.player.body.x < rightLimit) {
            this.player.setVelocityX(200)
        }
        else if (this.cursors.up.isDown && this.player.body.x > leftLimit && this.player.body.x < rightLimit) {
            this.player.setVelocityY(-200)
        }
        else if (this.cursors.down.isDown && this.player.body.x > leftLimit && this.player.body.x < rightLimit) {
            this.player.setVelocityY(200)
        }
        else {
            // stop movement if not left or right
            this.player.setVelocityX(0)
            this.player.setVelocityY(0)
        }

    }

}