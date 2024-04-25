String.prototype.replaceAt = function(index, character) { 
    return this.substring(0, index) + character + this.substring(index + character.length); 
}

const button = document.querySelector('#calcular');
const palabras = ['computador', 'pantalla', 'teclado', 'cpu'];
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;
let letrasCorrectas = new Set(); 
let letrasIncorrectas = new Set(); 

document.querySelector('#output').innerHTML = palabraConGuiones;

button.addEventListener('click', () => {
    evaluarLetra();
});

document.querySelector('#letra').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        evaluarLetra();
    }
});

function evaluarLetra() {
    let letra = document.querySelector('#letra').value;
    letra = letra.toLowerCase();

    document.querySelector('#letra').value = '';

    let haFallado = true;

    for (const i in palabra) {
        if (letra == palabra[i]) {
            palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
            haFallado = false;
        }
    }

    if (haFallado) {
        contadorFallos++;
        letrasIncorrectas.add(letra); 
        document.querySelector('#ahorcado').style.backgroundPosition = -(180 * contadorFallos) + 'px 0px'; 
        if (contadorFallos > 2) {
            document.querySelector('#ahorcado').style.backgroundPosition = -(198 * contadorFallos) + 'px 220px';
        }
        if (contadorFallos >= 5) {
            document.querySelector('#resultado').innerHTML = "Perdiste, has sido ahorcado.";
            document.getElementById('resultado').style.backgroundColor = "#740707";
            button.disabled = true;
            confirmarReinicio(); 
        }
    } else {
        letrasCorrectas.add(letra); 
        if (palabraConGuiones.indexOf('_') < 0) {
            document.querySelector('#resultado').innerHTML = "¡¡Eres un Ganador!!";
            document.getElementById('resultado').style.backgroundColor = "#0c5ca7";
            button.disabled = true;
            confirmarReinicio(); 
        }
    }
    document.querySelector('#output').innerHTML = palabraConGuiones;
}

function confirmarReinicio() {
    if (confirm("¿Deseas reiniciar el juego?")) {
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    contadorFallos = 0;
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraConGuiones = palabra.replace(/./g, "_ ");
    document.querySelector('#output').innerHTML = palabraConGuiones;
    document.querySelector('#resultado').innerHTML = '';
    document.querySelector('#letra').value = '';
    document.querySelector('#ahorcado').style.backgroundPosition = '0px 0px';
    button.disabled = false;

    letrasCorrectas.clear();
    letrasIncorrectas.clear();
}
