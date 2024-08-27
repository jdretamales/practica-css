// Variables para almacenar los valores y la operación actual
let pantalla = document.getElementById('pantalla');
let operacionActual = '';
let valorAnterior = '';
let operacion = undefined;

// Función para agregar números a la pantalla
function agregarNumero(numero) {
    operacionActual = operacionActual.toString() + numero.toString();
    actualizarPantalla();
}

// Función para agregar el punto decimal
function agregarPunto() {
    if (operacionActual.includes('.')) return;
    operacionActual = operacionActual.toString() + '.';
    actualizarPantalla();
}

// Función para elegir la operación (+, -, *, /)
function agregarOperacion(op) {
    if (operacionActual === '') return;
    if (valorAnterior !== '') {
        calcular();
    }
    operacion = op.toString();
    valorAnterior = operacionActual;
    operacionActual = '';
}

// Función para aplicar funciones científicas
function funcion(tipo) {
    const valor = parseFloat(operacionActual);
    if (isNaN(valor)) return;

    switch (tipo) {
        case 'sqrt':
            operacionActual = Math.sqrt(valor).toString();
            break;
        case 'pow':
            operacionActual = Math.pow(valor, 2).toString();
            break;
        case 'log':
            operacionActual = Math.log10(valor).toString();
            break;
        case 'exp':
            operacionActual = Math.exp(valor).toString();
            break;
        default:
            return;
    }
    actualizarPantalla();
}

// Función para calcular el resultado
function calcular() {
    let calculo;
    const anterior = parseFloat(valorAnterior);
    const actual = parseFloat(operacionActual);
    if (isNaN(anterior) || isNaN(actual)) return;

    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    operacionActual = calculo.toString();
    operacion = undefined;
    valorAnterior = '';
    actualizarPantalla();
}

// Función para actualizar la pantalla
function actualizarPantalla() {
    pantalla.value = operacionActual;
}

// Función para limpiar la pantalla
function limpiarPantalla() {
    operacionActual = '';
    valorAnterior = '';
    operacion = undefined;
    actualizarPantalla();
}
