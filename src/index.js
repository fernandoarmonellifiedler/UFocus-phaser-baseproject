import Phaser from 'phaser';
import level5 from './scenes/level5.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1100,
    height: 640,
    scene: level5,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }
})
