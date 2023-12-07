function createAndAnimateBugs() {
    let section2 = document.querySelector('.main_game_options');
    // Crear y estilizar las esferas
    const sphere1 = createSphere( 0, 0);
    const sphere2 = createSphere( section2.clientWidth / 2, section2.clientHeight / 2);
    const sphere3 =createSphere(150,250)
    section2.appendChild(sphere1);
    section2.appendChild(sphere2);
    section2.appendChild(sphere3);


    // Variables para el movimiento
    let speedX1 = 2;
    let speedY1 = 2;
    let speedX2 = 2;
    let speedY2 = 2;

    // Función para crear una esfera
    function createSphere( left, top) {
        const sphere = document.createElement('div');
        sphere.style.width = '30px';
        sphere.style.height = '30px';
        sphere.style.borderRadius = '50%';
        sphere.style.position = 'absolute';
        sphere.style.left = left + 'px';
        sphere.style.top = top + 'px';
        sphere.style.border='2px solid black'
        sphere.className='bugs_styles'
        return sphere;
    }

    // Función para animar una esfera
    function animateSphere(sphere, speedX, speedY) {
        // Rebotar en las paredes del section-2
        let x = parseInt(sphere.style.left, 10);
        let y = parseInt(sphere.style.top, 10);

        x += speedX;
        y += speedY;

        if (x + 30 > section2.clientWidth || x < 0) {
            speedX *= -1;
        }

        if (y + 30 > section2.clientHeight || y < 0) {
            speedY *= -1;
        }

        sphere.style.left = x + 'px';
        sphere.style.top = y + 'px';

        // Solicitar la próxima animación
        requestAnimationFrame(() => animateSphere(sphere, speedX, speedY));
    }

    // Iniciar la animación para cada esfera
    animateSphere(sphere1, speedX1, speedY1);
    animateSphere(sphere2, speedX2, speedY2);
    animateSphere(sphere3, speedX2, speedY2);

}

export { createAndAnimateBugs };
