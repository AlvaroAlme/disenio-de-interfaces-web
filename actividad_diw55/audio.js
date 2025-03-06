/*  Debe cargar el segundo audio creando un objeto audio (audio2.mp3)
    Debe hacer que ocurra lo siguiente al pulsar cada botón:

    i. Reproducir A1: parará la reproducción de audio2.mp3 (si procede) y reproducirá audio1.mp3.
    ii. Parar A1: parará la reproducción de audio1.mp3.
    iii. Reproducir A2: parará la reproducción de audio1.mp3 (si procede) y reproducirá audio2.mp3.
    iv. Parar A2: parará la reproducción de audio2.mp3.*/



const audio1 = document.getElementById("audio1");


const audio2 = new Audio("audio2.mp3");


const playA1 = document.getElementById("playA1");
const stopA1 = document.getElementById("stopA1");
const playA2 = document.getElementById("playA2");
const stopA2 = document.getElementById("stopA2");


playA1.addEventListener("click", () => {
    
    if (!audio2.paused) {
        audio2.pause();
        audio2.currentTime = 0;
    }
    
    audio1.play();
});

stopA1.addEventListener("click", () => {
    
    audio1.pause();
    audio1.currentTime = 0;
});

playA2.addEventListener("click", () => {
    
    if (!audio1.paused) {
        audio1.pause();
        audio1.currentTime = 0;
    }
    
    audio2.play();
});

stopA2.addEventListener("click", () => {
    
    audio2.pause();
    audio2.currentTime = 0;
});
