/* GLOBAL PHASER */

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "gameScene" });
    this.maxCoralCount = 7; // Máximo de corales permitidos
    this.currentCoralCount = 0; // Corales actuales
    // Vidas del jugador
    this.lives = 3;

    // Propiedad para rastrear el estado del color del jugador
    this.playerColor = 0; // 0 para azul, 1 para rojo, 2 para naranja

    // Contador de puntos
    this.score = 0;
    this.coralCollisions = 0; // Contador de colisiones con los corales

    this.gameOverText = null;
    this.victoryText = null;
    this.gameOverTextStyle = {
      font: "35px Arial",
      fill: "#ffffff",
      align: "center",
    };
  }

  preload() {
    // No necesitamos cargar imágenes ya que estamos utilizando colores sólidos
  }

  create() {
    this.physics.world.gravity.y = 300; // Establecer la gravedad

    // Utilizar colores sólidos para el fondo y el jugador
    this.background = this.add
      .rectangle(0, 0, 800, 600, 0x001a33) // Cambiado a un azul oscuro
      .setOrigin(0, 0);
    this.player = this.physics.add
      .sprite(800 / 2, 500, "player") // Ajustado para comenzar un poco más abajo
      .setScale(2); // Aumentado el tamaño x4

    // Texto de vidas
    this.livesText = this.add.text(10, 10, "Vidas: " + this.lives, {
      fontSize: "16px",
      fill: "#fff",
    });

    this.colorChangeDelayActive = false;

    this.physics.world.setBounds(0, 0, 800, 600); // Establecer límites del mundo
    this.player.setCollideWorldBounds(false); // Permitir que el jugador colisione con los límites del mundo

    // Crear un grupo para los corales
    this.coralGroup = this.physics.add.group();

    // Establecer el color inicial del jugador
    this.setPlayerColor(this.playerColor);

    // Llamar a la función para crear los corales
    this.createCoral();
  }

  setPlayerColor(color) {
    this.playerColor = color;
    this.player.setTintFill(this.getColorHexByIndex(color));
  }

  createCoral() {
    let maxAttempts = 100;
    let minDistanceX = 100;
    let minDistanceY = 100;

    for (let i = 0; i < this.maxCoralCount - this.currentCoralCount; i++) {
      if (this.currentCoralCount >= this.maxCoralCount) {
        break;
      }

      let validLocation = false;
      let attempts = 0;

      let tileXLocation, tileYLocation;

      while (!validLocation && attempts < maxAttempts) {
        tileXLocation = Math.floor(Math.random() * 800) + 1;
        tileYLocation = Math.floor(Math.random() * 200) - 200;

        validLocation = true;

        this.coralGroup.children.iterate((existingCoral) => {
          if (
            Phaser.Math.Distance.Between(
              tileXLocation,
              tileYLocation,
              existingCoral.x,
              existingCoral.y
            ) < minDistanceX
          ) {
            validLocation = false;
          }
        });

        attempts++;
      }

      if (validLocation) {
        let tileXVelocity = Math.floor(Math.random() * 50) + 1;
        tileXVelocity *= Math.round(Math.random()) ? 1 : -1;

        let coralType = Phaser.Math.Between(1, 3);

        let aCoral;

        // Utilizar colores sólidos para los corales
        const coralColor = this.getColorHexByIndex(coralType - 1);
        aCoral = this.physics.add.sprite(tileXLocation, tileYLocation, null);

        aCoral.setTintFill(coralColor);

        aCoral.coralColor = coralType - 1; // 0 para azul, 1 para rojo, 2 para naranja

        // Ajustar el tamaño del coral
        aCoral.setScale(2); // Ajusta el valor según tus necesidades, aquí se aumenta el tamaño x4

        this.physics.world.enable(aCoral);
        aCoral.body.velocity.y = 300;
        aCoral.body.velocity.x = tileXVelocity;

        this.coralGroup.add(aCoral);
        this.currentCoralCount++;

        this.score++;

        if (this.score >= 50) {
          this.victoryText = this.add.text(
            800 / 2,
            500 / 2,
            "¡Bien hecho! Puntuación: " + this.score,
            this.gameOverTextStyle
          );
          this.physics.pause();
        }
      }
    }
  }

  update(time, delta) {
    const playerSpeed = 400; // Velocidad del jugador (ajusta según tus necesidades)

    // Verificar las teclas de movimiento (por ejemplo, flechas)
    const cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
      this.player.setVelocityX(-playerSpeed);
    } else if (cursors.right.isDown) {
      this.player.setVelocityX(playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }

    this.player.setVelocityY(0);

    this.player.body.allowGravity = false;

    // Verificar si se presionó la barra espaciadora y cambiar el color del jugador
    if (
      Phaser.Input.Keyboard.JustDown(
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
      ) &&
      !this.colorChangeDelayActive
    ) {
      this.colorChangeDelayActive = true; // Activar el retraso
      setTimeout(() => {
        this.playerColor = (this.playerColor + 1) % 3; // Alternar entre 0, 1 y 2
        this.setPlayerColor(this.playerColor);
        this.colorChangeDelayActive = false; // Desactivar el retraso
      }, 500); // 500 milisegundos de retraso (0.5 segundos)
    }

    this.coralGroup.children.iterate((coral) => {
      if (coral) {
        // Verificar si el coral es válido antes de realizar operaciones en él
        if (coral.y > 600) {
          coral.destroy(); // Elimina el coral
          this.currentCoralCount--;
          this.createCoral(); // Crea un nuevo coral
        }

        // Modificar el manejo de colisiones aquí
        const coralColor = coral.coralColor;
        if (coralColor !== this.playerColor) {
          // Colisión entre el jugador y el coral (solo si los colores son diferentes)
          this.physics.collide(this.player, coral, () => {
            // Aplicar el efecto de "stun" al jugador
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            this.physics.pause(); // Pausar la física del jugador

            this.lives--;

            this.livesText.setText("Vidas: " + this.lives);

            // Volver a colocar el coral en la parte superior
            coral.y = -coral.height;

            // Aumentar el contador de colisiones
            this.coralCollisions++;

            if (this.coralCollisions >= 3) {
              // Mostrar el texto de Game Over
              this.gameOverText = this.add.text(
                800 / 2,
                500 / 2,
                "Game Over. Score: " + this.score,
                this.gameOverTextStyle
              );
              this.physics.pause(); // Pausar el juego
            } else {
              // Establecer un temporizador para desactivar el "stun" después de 0.5 segundos
              setTimeout(() => {
                this.physics.resume(); // Reanudar la física del jugador
              }, 500); // 500 milisegundos de retraso (0.5 segundos)
            }
          });
        }
      }
    });

    // Restringir el movimiento dentro de los límites del mundo
    this.player.x = Phaser.Math.Clamp(this.player.x, 0, 800); // Límites horizontales (ajusta según el ancho de la pantalla)
    this.player.y = Phaser.Math.Clamp(this.player.y, 0, 600); // Límites verticales (ajusta según el alto de la pantalla)
  }

  getColorHexByIndex(index) {
    // Asociar índices de color a códigos hexadecimales
    const colorHex = [0x0000ff, 0xff0000, 0xffa500];
    return colorHex[index];
  }
}

export default GameScene;
