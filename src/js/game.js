/*GLOBAL PHASER*/

import MenuScene from "./menuScene.js";
import SplashScene from "./splashScene.js";
import TitleScene from "./titleScene.js";
import GameScene from "./gameScene.js";

const splashScene = new SplashScene();
const titleScene = new TitleScene();
const menuScene = new MenuScene();
const gameScene = new GameScene();

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);
game.scene.add("menuScene", menuScene);
game.scene.add("gameScene", gameScene);

game.scene.start("splashScene");
game.scene.start("titleScene");
game.scene.start("menuScene");
game.scene.start("gameScene");
