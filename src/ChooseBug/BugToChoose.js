import { chromaticWheelColors,secondarychromaticWheelColors, ternarychromaticWheelColors } from "../GlobarVars/chromaticColors";
import { levelSuccessDescription } from "../GlobarVars/describeInfo";
import { levelSuccesslful } from "../Modals/CompleteLevel";

const boxToShowCurrentBug=document.createElement('div')
boxToShowCurrentBug.className='card_current_bug'
const bugRequired=document.createElement('div')
bugRequired.className='bug_to_pick'

function handleBugToChoose (){
    const parentElement=document.querySelector('.header_game_options');
    const allBugsMoving=document.querySelectorAll('.bugs_styles')
    const chromaticElement=document.querySelector('.wheel_status_sub_level_1')
    parentElement.appendChild(boxToShowCurrentBug)
    boxToShowCurrentBug.appendChild(bugRequired)
    function subLevel_1Complete(){
        setTimeout(() => {
            levelSuccesslful();
          }, 1000);
    }
    function subLevel_2Complete(){
        const getModalContainer=document.getElementById('modal_level_info')
        console.log(levelSuccessDescription)
        setTimeout(() => {
           console.log('no ejecutar levelSuccesslful, sino agregar de nuevo la class')
           getModalContainer.className='alert'
          }, 1000);
    }
    function updateColorToSelect(){
        if (chromaticWheelColors.length > 0) {
            bugRequired.style.backgroundColor = chromaticWheelColors[0];
        }else if(!chromaticWheelColors.includes('yellow')){
            subLevel_1Complete()
            bugRequired.style.backgroundColor = "grey"; // Si el array esta vacio dejar este color
        }else {
            bugRequired.style.backgroundColor = "grey"; // Si el array esta vacio dejar este color
            }
    }
    function updateSecondaryColors(){
        if(secondarychromaticWheelColors.length > 0){
            bugRequired.style.backgroundColor = secondarychromaticWheelColors[0];
        }else if(!secondarychromaticWheelColors.includes('orange')){
            console.log('nivel 2 completo')
            subLevel_2Complete()
            bugRequired.style.backgroundColor = "grey"; // Si el array esta vacio dejar este color
        }
         else {
            bugRequired.style.backgroundColor = "grey"; // Si el array esta vacio dejar este color
            }
    }
    function updateTernaryColors(){
        if(ternarychromaticWheelColors.length > 0){
            bugRequired.style.backgroundColor = ternarychromaticWheelColors[0];
        }else if(!ternarychromaticWheelColors.includes('magenta')){
            console.log('nivel 3 completo')
            bugRequired.style.backgroundColor = "grey"; // Si el array esta vacio dejar este color
        }
         else {
            bugRequired.style.backgroundColor = "grey"; // Si el array esta vacio dejar este color
            }
    }
    updateColorToSelect()
    bugRequired.style.backgroundColor=`${chromaticWheelColors[0]}`
    //ELEGIR INSECTOS AQUI ABAJO
    allBugsMoving[0].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[0]).getPropertyValue('--set-colorbtn') //los estilos de ese insecto
        if(colorName === chromaticWheelColors[0] && chromaticWheelColors.includes(colorName)){ // si el color del insecto coincide al de la primera posicion del array ejecuto
            chromaticElement.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            chromaticWheelColors.splice(chromaticWheelColors.indexOf(colorName), 1);
            console.log(chromaticWheelColors)
            updateColorToSelect(); //Refrescar color a elegir en nivel 1
        }else if(secondarychromaticWheelColors.length > 0 && colorName === secondarychromaticWheelColors[0]){
            let chromaticElementTwo=document.querySelector('.wheel_status_sub_level_2')
            chromaticElementTwo.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            secondarychromaticWheelColors.splice(secondarychromaticWheelColors.indexOf(colorName), 1);
            updateSecondaryColors()
            console.log(secondarychromaticWheelColors)
        }else if(ternarychromaticWheelColors.length > 0 && colorName === ternarychromaticWheelColors[0]){
            let chromaticElementThree=document.querySelector('.wheel_status_sub_level_3')
            chromaticElementThree.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            console.log(colorName,ternarychromaticWheelColors[0])
            ternarychromaticWheelColors.splice(ternarychromaticWheelColors.indexOf(colorName), 1);
            updateTernaryColors()
        }
        else{
            console.log('a pensar') // Ver que hacer o prevenir multiples clicks
        }
    })
    allBugsMoving[1].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[1]).getPropertyValue('--set-colorbtn') //los estilos de ese insecto
        if(colorName === chromaticWheelColors[0] && chromaticWheelColors.includes(colorName)){ // si el color del insecto coincide al de la primera posicion del array ejecuto
            chromaticElement.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            chromaticWheelColors.splice(chromaticWheelColors.indexOf(colorName), 1);
            console.log(chromaticWheelColors)
            updateColorToSelect(); //Refrescar color a elegir en nivel 1
        }else if(secondarychromaticWheelColors.length > 0 && colorName === secondarychromaticWheelColors[0]){
            let chromaticElementTwo=document.querySelector('.wheel_status_sub_level_2')
            chromaticElementTwo.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            secondarychromaticWheelColors.splice(secondarychromaticWheelColors.indexOf(colorName), 1);
            updateSecondaryColors()
            console.log(secondarychromaticWheelColors)
        }else if(ternarychromaticWheelColors.length > 0 && colorName === ternarychromaticWheelColors[0]){
            let chromaticElementThree=document.querySelector('.wheel_status_sub_level_3')
            chromaticElementThree.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            console.log(colorName,ternarychromaticWheelColors[0])
            ternarychromaticWheelColors.splice(ternarychromaticWheelColors.indexOf(colorName), 1);
            updateTernaryColors()
            console.log(ternarychromaticWheelColors[0])
        }else {
            console.log('pensar') // Ver que hacer o prevenir multiples clicks
        }

    }) 
    allBugsMoving[2].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[2]).getPropertyValue('--set-colorbtn') //los estilos de ese insecto
        if(colorName === chromaticWheelColors[0] && chromaticWheelColors.includes(colorName)){ // si el color del insecto coincide al de la primera posicion del array ejecuto
            chromaticElement.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            chromaticWheelColors.splice(chromaticWheelColors.indexOf(colorName), 1);
            console.log(chromaticWheelColors)
            updateColorToSelect(); //Refrescar color a elegir en nivel 1
        }else if(secondarychromaticWheelColors.length > 0 && colorName === secondarychromaticWheelColors[0]){
            let chromaticElementTwo=document.querySelector('.wheel_status_sub_level_2')
            chromaticElementTwo.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            secondarychromaticWheelColors.splice(secondarychromaticWheelColors.indexOf(colorName), 1);
            updateSecondaryColors()
            console.log(secondarychromaticWheelColors)
        }else if(ternarychromaticWheelColors.length > 0 && colorName === ternarychromaticWheelColors[0]){
            let chromaticElementThree=document.querySelector('.wheel_status_sub_level_3')
            chromaticElementThree.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            console.log(colorName,ternarychromaticWheelColors[0])
            ternarychromaticWheelColors.splice(ternarychromaticWheelColors.indexOf(colorName), 1);
            updateTernaryColors()
        }else{
            console.log('a pensar') // Ver que hacer o prevenir multiples clicks

        }
    })
}
export {handleBugToChoose}
