/*GLOBAL PHASER*/

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });

    this.titleSceneBackgroundImage = null;
    this.titleSceneText = null;
    this.titleSceneTextStyle = {
      font: "50px Times",
      fill: "#fde4b9",
      align: "center",
    };
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }

  preload() {
    console.log("titleScene");
    this.load.image("bgSquid", "assets/bgsquid.png");
  }

  create(data) {
    this.titleSceneBackgroundImage = this.add
      .sprite(0, 0, "bgSquid")
      .setScale(2.75);
    this.titleSceneBackgroundImage.x = 800 / 2;
    this.titleSceneBackgroundImage.y = 500 / 2;

    this.titleSceneText = this.add
      .text(
        800 / 2,
        500 / 2 + 150,
        "Juego del calamar",
        this.titleSceneTextStyle
      )
      .setOrigin(0.5);
  }

  update(time, delta) {
    if (time > 100000) {
      console.log(time);
      this.scene.switch("gameScene");
    }
  }
}

export default TitleScene;
