import Phaser from "phaser";

import gameScene from "../src/js/gameScene";
import splashScene from "../src/js/splashScene";
import menuScene from "../src/js/menuScene";
import titleScene from "../src/js/titleScene";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {}

  create() {
    this.add.image(400, 300, "background");

    const logo = this.add.image(400, 150, "logo");

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  physics: {
    default: "arcade", // O el motor de física que estás utilizando
    arcade: {
      gravity: { y: 300 }, // Ajusta según tus necesidades
      debug: false, // Puedes establecerlo en true para ver colisiones y límites
    },
  },
  scene: MyGame,
};
const game = new Phaser.Game(config);
game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);
game.scene.add("menuScene", menuScene);
game.scene.add("gameScene", gameScene);

game.scene.start("gameScene");
