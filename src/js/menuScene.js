/*GLOBAL PHASER*/

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" });

    this.startButton = null;
    this.menuSceneBackgroundImage = null;
  }

  init(data) {}

  preload() {
    console.log("menuScene");
    this.load.image("menuSceneBackground", "assets/seabg.png");
  }

  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "menuSceneBackground"
    );
    this.menuSceneBackgroundImage.x = 800 / 2;
    this.menuSceneBackgroundImage.y = 500 / 2;

    this.startButton = this.add.sprite(800 / 2, 500 / 2, "startButton");
    this.startButton.setInteractive({ useHandCursor: true });
    this.startButton.on("pointerdown", () => this.clickButton());
  }

  update(time, delta) {}

  clickButton() {
    this.startButton.setVisible(false);
    this.menuSceneBackgroundImage.setVisible(false);
    this.scene.start("gameScene");
    console.log("hola");
    this.scene.get("gameScene").background.setVisible(true);
  }
}

export default MenuScene;
