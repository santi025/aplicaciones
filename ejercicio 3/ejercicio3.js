document.addEventListener('DOMContentLoaded', function() {
    const celdas = document.querySelectorAll('.celda');
    const botonReset = document.getElementById('botonReset');
    const estado = document.getElementById('estado');

    let jugadorActual = 'X';
    let tablero = ['', '', '', '', '', '', '', '', ''];
    let juegoActivo = true;

    function manejarClickEnCelda(indice) {
        if (juegoActivo && tablero[indice] === '') {
            tablero[indice] = jugadorActual;
            celdas[indice].textContent = jugadorActual;
            comprobarGanador();
            jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
        }
    }

    function comprobarGanador() {
        const condicionesGanadoras = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < condicionesGanadoras.length; i++) {
            const [a, b, c] = condicionesGanadoras[i];
            if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
                estado.textContent = `¡${tablero[a]} ha ganado!`;
                juegoActivo = false;
                return;
            }
        }

        if (!tablero.includes('')) {
            estado.textContent = '¡Empate!';
            juegoActivo = false;
        }
    }

    function manejarReinicio() {
        jugadorActual = 'X';
        tablero = ['', '', '', '', '', '', '', '', ''];
        celdas.forEach(celda => celda.textContent = '');
        estado.textContent = '';
        juegoActivo = true;
    }

    celdas.forEach((celda, indice) => {
        celda.addEventListener('click', () => manejarClickEnCelda(indice));
    });

    botonReset.addEventListener('click', manejarReinicio);
});
