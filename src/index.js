import Phaser from 'phaser';
import Level0 from './scenes/level0.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1152,
    height: 819.2,
    scene: [Level0], 
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }
})