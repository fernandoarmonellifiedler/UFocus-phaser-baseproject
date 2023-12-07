import { pickTwoColors, secondarychromaticWheelColors, chromaticWheelColors, colorCombinations, ternarychromaticWheelColors } from "../GlobarVars/chromaticColors"

function addButtonsToChangeColors(){
    let sectionToBtns=document.querySelector('.footer_game_options')
    let changeColorBugsTag=document.querySelectorAll('.bugs_styles')
    let btnRed=document.createElement('button')
    let btnBlue=document.createElement('button')
    let btnYellow=document.createElement('button')
    
    let btnGreen=document.createElement('button')
    let btnPurple=document.createElement('button')
    let btnOrange=document.createElement('button')

    sectionToBtns.appendChild(btnBlue)
    sectionToBtns.appendChild(btnYellow)
    sectionToBtns.appendChild(btnRed)
    sectionToBtns.appendChild(btnGreen)
    sectionToBtns.appendChild(btnPurple)
    sectionToBtns.appendChild(btnOrange)


    btnBlue.style.backgroundColor='blue'
    btnRed.style.backgroundColor='red'
    btnYellow.style.backgroundColor='yellow'
    btnGreen.style.backgroundColor='green'
    btnPurple.style.backgroundColor='purple'
    btnOrange.style.backgroundColor='orange'

    btnRed.className='btn_to_handle_colors'
    btnBlue.className='btn_to_handle_colors'
    btnYellow.className='btn_to_handle_colors'
    btnGreen.className='btn_to_handle_colors_secondary'
    btnPurple.className='btn_to_handle_colors_secondary'
    btnOrange.className='btn_to_handle_colors_secondary'

    function getMixedColor() {
        // demora 0.5 segundos en cambiar al color deseado
        if(!Object.values(pickTwoColors).includes('')){
            console.log('hay dos colores')
            const sortedColors = Object.values(pickTwoColors).sort().join('').toLowerCase(); // los ordenos y los uno, para luego buscar el valor por nombre,
            changeColorBugsTag.forEach((bug) => {
                bug.style.setProperty('--set-colorbtn', `${colorCombinations[`${sortedColors}`]}`);
            });
        }else{
            console.log('falta un color')
        }
        
    }
    btnRed.addEventListener('click',()=>{
        let colorName='red'
        if(chromaticWheelColors.length > 0){
            changeColorBugsTag.forEach((bug) => {
                bug.style.setProperty('--set-colorbtn', `${colorName}`);
            });
        }
        if (secondarychromaticWheelColors.length > 0 || ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && !Object.values(pickTwoColors).includes(colorName)){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                pickTwoColors[`color${positionToAddColor + 1}`] = `${colorName}`
                btnRed.style.boxShadow='0px 0px 15px red'
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else{
                console.log('ya hay dos colores elegidos')
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                pickTwoColors[`color${findColorToRemoveIt + 1}`] = ''
                btnRed.style.boxShadow=''
            }
        }
    })
    btnBlue.addEventListener('click',()=>{
        let colorName='blue'
        if(chromaticWheelColors.length > 0){
            changeColorBugsTag.forEach((bug) => {
                bug.style.setProperty('--set-colorbtn', `${colorName}`);
            });
        }
        if (secondarychromaticWheelColors.length > 0 || ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && !Object.values(pickTwoColors).includes(colorName)){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                pickTwoColors[`color${positionToAddColor + 1}`] = `${colorName}`
                btnBlue.style.boxShadow='0px 0px 15px blue'
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else{
                console.log('ya hay dos colores elegidos')
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                pickTwoColors[`color${findColorToRemoveIt + 1}`] = ''
                btnBlue.style.boxShadow=''
            }
        }
    })
    btnYellow.addEventListener('click',()=>{
        let colorName='yellow'
        if(chromaticWheelColors.length > 0){
            changeColorBugsTag.forEach((bug) => {
                bug.style.setProperty('--set-colorbtn', `${colorName}`);
            });
        }
        if (secondarychromaticWheelColors.length > 0 || ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && !Object.values(pickTwoColors).includes(colorName)){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                pickTwoColors[`color${positionToAddColor + 1}`] = `${colorName}`
                btnYellow.style.boxShadow='0px 0px 15px yellow'
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else{
                console.log('ya hay dos colores elegidos')
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                pickTwoColors[`color${findColorToRemoveIt + 1}`] = ''
                btnYellow.style.boxShadow=''
            }
        }
    })
    btnGreen.addEventListener('click',()=>{
        let colorName='green'
        if(ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && !Object.values(pickTwoColors).includes(colorName)){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                pickTwoColors[`color${positionToAddColor + 1}`] = `${colorName}`
                btnGreen.style.boxShadow='0px 0px 15px yellow'
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else{
                console.log('ya hay dos colores elegidos')
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                pickTwoColors[`color${findColorToRemoveIt + 1}`] = ''
                btnYellow.style.boxShadow=''
            }
        }
    })
    btnPurple.addEventListener('click',()=>{
        if(ternarychromaticWheelColors.length > 0){
        console.log('click purple')
        }
    })
    btnOrange.addEventListener('click',()=>{
        if(ternarychromaticWheelColors.length > 0){
        console.log('click orange')
        }
    })
}
export {addButtonsToChangeColors}