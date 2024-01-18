//let titulo = document.querySelector('h1'); // variable titulo, document(conecta la etiqueta de JS y HTML), querySelector muestra la etiqueta del index
//titulo.innerHTML = 'Juego del Numero' // devuelve la sintaxis HTML de un elemento y se le asigna un texto Juego del Numero 


//ahora utilizaremos una funcion para reutilizarla y asi poder eliminar la declaracion de variables, encapsularza y luego llamarla.

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = (0); // declaramos las variables 
let intentos = 1;
let  listaNumerosSorteados = []; // Arreglo para incluir los numeros generados
let numeroMaximo = 10;

console.log (numeroSecreto); // mostramos en consola la variable

function asignarTextoElemento(elemento, texto) {   // esta funcion puede recibir parametros, generica para reutilizarla,
    let elementoHtml = document.querySelector(elemento); // modifique el nombre de la variable y el parametro fijo por elemento
    elementoHtml.innerHTML = texto; // modifique la variable y el texto fijo por texto
}
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);  // mediante la funcion get obtenemos el numero del usuario

    if (numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else {
    if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p','El numero secreto es menor');
    } else{
        asignarTextoElemento('p','El numero secreto es mayor');
    }
        intentos++;
        Limpiarcaja();
    }
    return;
}

function Limpiarcaja(){ // funcion para vaciar la caja donde se ingresa el numero
    document.querySelector('#valorUsuario').value = ''; //  puente para seleccionar el valor del id#
    
}

function generarNumeroSecreto() {   // creamos funcion generarNumeroSecreto
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // definimos variable y con la funcion math.random obtenemos un numero aleatorios 
    console.log (numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){ // si todos los numeros estan en la lista se informa el siguiente
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles.')
    } else { // sino continuamos jugando
        if (listaNumerosSorteados.includes(numeroGenerado)) { //  si el numero generado esta incluido en la lista
        return generarNumeroSecreto();     // generamos nuevo numero aleatorio
        } else{      // sino esta en la lista lo incluimos
        listaNumerosSorteados.push(numeroGenerado); 
        return numeroGenerado;
        }
    }   
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego Adivina el Numero'); // llamo a la funcion asignarTextoElement para reutilizarla 
    asignarTextoElemento('p',`Ingresa un Numero del 1 al ${numeroMaximo}`);// llamo a la funcion asignarTextoElement para reutilizarla
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() { // funcion de reiniciar el juego mediante el boton permite:
    Limpiarcaja(); 
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true'); // deshabilitar el boton nuevo juego hasta acertar

}

condicionesIniciales();
