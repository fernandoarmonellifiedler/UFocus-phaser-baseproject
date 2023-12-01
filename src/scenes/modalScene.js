export default class ModalScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ModalScene' });
    }

    create() {
        const gameWidth = this.sys.game.config.width;
        const gameHeight = this.sys.game.config.height;

        // Calculate the position for vertical alignment
        const modalX = gameWidth / 2;
        const modalY = gameHeight / 2;
        const modalWidth = 300;
        const modalHeight = 200;

        // Create a modal background
        const modalBackground = this.add.graphics();
        modalBackground.fillStyle(0xffffff, 1);
        modalBackground.fillRect(modalX - modalWidth / 2, modalY - modalHeight / 2, modalWidth, modalHeight); // Set the dimensions here

        // Create modal text
        const modalText = this.add.text(modalX - 85, modalY - 25, 'This is a modal', { fontFamily: 'Arial', fontSize: '24px', color: '#000000' });

        // Make the modal interactive
        modalBackground.setInteractive();

        // Create your settings here
        let backButton = this.add.text(modalX, modalY, 'Back', { fill: '#0f0' })
            .setInteractive()
            .on('pointerdown', () => { 
                // Hide the settings scene
                this.scene.stop();
            });
    }
}

