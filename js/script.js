// CONSEGNA

/* Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. */

/* 1- Creiamo il markup statico; 
costruiamo il container e inseriamo un'immagine grande al centro; */

/* 2- Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. */

/* 3- Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. */

/* BONUS 1: aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa. */


//Creato array con immagini
const sliderImages = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];

// Elementi html
const itemsContainer = document.querySelector(".items-container");
console.log(itemsContainer);

for (let i = 0; i < sliderImages.length; i++) {
    //Creo immagini
    const elementImg = sliderImages[i];
    const element = 
    `<div class="item">
        <img src="${elementImg}" alt="">
    </div>`

    itemsContainer.innerHTML += element;
}

// Aggiungo immagine come partenza
const items = document.getElementsByClassName("item");
let sliderPosition = 0;
items[sliderPosition].classList.add("active");

// AVANTI
// Al click sul bottone next vedo immagine successiva
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function() {

    //Tolgo class active all'immagine corrente
    items[sliderPosition].classList.remove("active");

    //Se posso andare avanti 
    if(sliderPosition < (items.length - 1)) {
        //Incremento poi sliderPosition di 1
        sliderPosition++;
    } else {
        //Riparto dal primo elemento
        sliderPosition = 0;
    }

     //Aggiungo classe active all'immagine da visualizzare
     items[sliderPosition].classList.add("active");
});

// INDIETRO
// Al click sul bottone prev vedo immagine precedente
const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function() {

    //Tolgo class active all'immagine corrente
    items[sliderPosition].classList.remove("active");

    //Se posso andare indietro
    if(sliderPosition > 0) {
        //Decremento di 1 sliderPosition
        sliderPosition--;
    } else {
        //Riparto dall'ultimo elemento
        sliderPosition = sliderImages.length - 1;
    }

    //Aggiungo class active all'immagine da visualizzare
    items[sliderPosition].classList.add("active");
});

