/*GLOBAL PHASER*/

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    this.load.image("squid", "./assets/squid.png");
  }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, "squid");
    this.splashSceneBackgroundImage.x = 800 / 2;
    this.splashSceneBackgroundImage.y = 500 / 2;
  }

  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene");
    }
  }
}

export default SplashScene;
