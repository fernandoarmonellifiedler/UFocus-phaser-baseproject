import Phaser from 'phaser';
import Level5 from './scenes/level5.js'
import ModalScene from "./scenes/modalScene.js";


export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1100,
    height: 640,
    scene: [Level5, ModalScene], 
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }
})
