import { Scene, Game } from 'phaser';
import { createAndAnimateBugs } from './BugsSprites/BugsRunning';
import { addButtonsToChangeColors } from './Btn_controllers/btnToChangeColors';
import { informationAboutPickLevel } from './InformationLevel/bugsPickLevel';
import { addComponentsToHandleStatusAndSettings } from './Settings_intefaces/StatusAndSettings';
import { handleBugToChoose } from './ChooseBug/BugToChoose';
class MainScene extends Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        this.load.image('example', './metal.jpg');
    }

    create() {
        // Obtener las dimensiones de la ventana
        const section2 = document.querySelector('.section-2');

        // Obtén el ancho y alto de la etiqueta de la sección 2
        const width = section2.offsetWidth;
        const height = section2.offsetHeight;

        // Agregar la imagen y escalarla para ajustar al ancho y alto de la sección
       //  this.add.image(width / 2, height / 2, 'example').setDisplaySize(width, height).setDepth(-1);

    }
}

const config = {
    type: Phaser.AUTO,
    scene: MainScene,
    transparent: true,
};

function addSections() {
    const appElement = document.getElementById('app'); //capturar el id con el id = app
    const sectionsHeaderIndsideGameView=document.createElement('header'); //header dentro del juego
    const sectionsMainIndsideGameView=document.createElement('main'); //main dentro del juego
    const sectionsFooterIndsideGameView=document.createElement('footer'); //footer dentro del juego
    sectionsHeaderIndsideGameView.className='header_game_options';
    sectionsFooterIndsideGameView.className='footer_game_options';
    sectionsMainIndsideGameView.className='main_game_options'
    sectionsFooterIndsideGameView.id='handle_colors_section'
    for (let i = 1; i <= 3; i++) {
        const section = document.createElement('section');
  
        if (i === 2) {
            // Insertar el juego de Phaser en la segunda sección
            section.id = 'phaser-container';
            appElement.appendChild(section);
            section.className = 'section-2';
            section.style.width='48%'
            const getGameView= document.querySelector('#phaser-container')
            getGameView.appendChild(sectionsHeaderIndsideGameView)
            getGameView.appendChild(sectionsMainIndsideGameView)
            getGameView.appendChild(sectionsFooterIndsideGameView)

            // Inicializar el juego de Phaser en la segunda sección
            const game = new Game(config);

            // Renderizar el juego dentro de la segunda sección
            const phaserGameContainer = document.querySelector('.main_game_options');//main dentro del juego
            phaserGameContainer.appendChild(game.canvas); // medir dimensiones del contenedor
        } else if(i ===1) {
            appElement.appendChild(section);
            section.className='game_info_and_options_1'
        }else{
            appElement.appendChild(section);
            section.className='game_info_and_options_2'
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
  addSections(); // se ejecuta primero 
  createAndAnimateBugs();
  addButtonsToChangeColors();
  informationAboutPickLevel();
  addComponentsToHandleStatusAndSettings();
  handleBugToChoose(); //Maneja los insectos que apareceran para elegir
});

