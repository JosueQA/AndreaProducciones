/* FRONT */

/* Left */
const image_current = document.querySelector('#front_image');
const image_next = document.querySelector('#front_second_image');
const images = ['img/IMAGEN 1.png', 'img/IMAGEN 4.png', 'img/IMAGEN 5.png', 'img/IMAGEN 2.png', 'img/IMAGEN 3.png', ];

var n = 0;

image_current.src = images[0];

setInterval(() => {
    n++;
    if(n == images.length){
        n = 0;
    }
    switch (n % 2 == 0){
        case true:
            image_current.src = images[n];
            image_current.classList.remove('desactive_front_image');
            image_current.classList.add('active_front_image');

            image_next.classList.remove('active_front_image');
            image_next.classList.add('desactive_front_image')
            console.log('true');
                break;
        case false:
            image_next.src = images[n];
            image_next.classList.remove('desactive_front_image');
            image_next.classList.add('active_front_image');

            image_current.classList.remove('active_front_image');
            image_current.classList.add('desactive_front_image');
            console.log('false');
                break;
        }
    }, 2500);


/* CARROUSEL */

const left_arrow = document.querySelector("#front_left_arrow");
const right_arrow = document.querySelector("#front_right_arrow");

const left_carrousel_image = document.querySelector('#left_carrousel_image');
const current_carrousel_image = document.querySelector('#current_carrousel_image');
const right_carrousel_image = document.querySelector('#right_carrousel_image');



var position = 0;

// Movimiento
function positionMas1 () {
    // 0 +1 -1
    if(position == -1){ // Siesque viene de la posicion -1 
        current_carrousel_image.classList.add('stay_left');

        right_carrousel_image.classList.add('move_center');
        
        left_carrousel_image.classList.add('move_right');

    } else { // Siesque viene de la posicion 0
        current_carrousel_image.classList.add('move_left');

        right_carrousel_image.classList.add('move_center');
        
        left_carrousel_image.classList.add('stay_right');
    }   
    eliminacionClasesMenos1();
    eliminacionClases0();
}

function positionMenos1 () {
    // +1 -1 0
    if(position == 1){// Siesque viene de la posicion 1 
        current_carrousel_image.classList.add('stay_right');
    
        left_carrousel_image.classList.add('move_center');
    
        right_carrousel_image.classList.add('move_left');
        
    } else { // Siesque viene de la posicion 0
        current_carrousel_image.classList.add('move_right');
    
        left_carrousel_image.classList.add('move_center');
    
        right_carrousel_image.classList.add('stay_left');
    }   
    eliminacionClases1();
    eliminacionClases0();
}

function position0 () {
    if(position == -1){
        current_carrousel_image.classList.add('move_center');

        right_carrousel_image.classList.add('stay_right');
        
        left_carrousel_image.classList.add('move_left');

    } else{
        // Siesque viene de la posicion 1
        current_carrousel_image.classList.add('move_center');

        right_carrousel_image.classList.add('move_right');
        
        left_carrousel_image.classList.add('stay_left');
    }
    eliminacionClasesMenos1();
    eliminacionClases1();
}

// Eliminacion de clases
const eliminacionClases1 = () => {

    current_carrousel_image.classList.remove('stay_left');

    right_carrousel_image.classList.remove('move_center');
    
    left_carrousel_image.classList.remove('move_right');

    current_carrousel_image.classList.remove('move_left');

    right_carrousel_image.classList.remove('move_center');
    
    left_carrousel_image.classList.remove('stay_right');
}

const eliminacionClasesMenos1 = () => {
    
    current_carrousel_image.classList.remove('stay_right');
    
    left_carrousel_image.classList.remove('move_center');

    right_carrousel_image.classList.remove('move_left');
    
    current_carrousel_image.classList.remove('move_right');

    left_carrousel_image.classList.remove('move_center');

    right_carrousel_image.classList.remove('stay_left');
}

const eliminacionClases0 = () => {
    
    current_carrousel_image.classList.remove('move_center');

    right_carrousel_image.classList.remove('stay_right');
    
    left_carrousel_image.classList.remove('move_left');

    current_carrousel_image.classList.remove('move_center');

    right_carrousel_image.classList.remove('move_right');
    
    left_carrousel_image.classList.remove('stay_left');
}

left_arrow.addEventListener('click', () => {
    if(position == 0){
        positionMenos1();
        setTimeout(() => {
            position = -1;
        }, 500);

    } else if (position == -1){
        positionMas1();
        setTimeout(() => {
            position = 1;
        }, 500);
        
    } else if (position == 1){
        position0();
        setTimeout(() => {
            position = 0;
        }, 500);
    }
    
})


right_arrow.addEventListener('click', () => {
    if(position == 0){
        positionMas1();
        setTimeout(() => {
            position = 1;
        }, 500);

    } else if (position == 1){
        positionMenos1();
        setTimeout(() => {
            position = -1;
        }, 500);
        
    } else if (position == -1){
        position0();
        setTimeout(() => {
            position = 0;
        }, 500);
    }
})



/* SCROLL REVEALL API */
window.sr = ScrollReveal();
const navbar = document.querySelector('nav');



ScrollReveal().reveal(navbar,{ delay: 250 })