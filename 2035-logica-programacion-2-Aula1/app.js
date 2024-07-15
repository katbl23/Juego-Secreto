/* let titulo=document.querySelector('h1');
titulo.innerHTML="Juego del nùmero secreto";

let parrafo=document.querySelector('p');
parrafo.innerHTML="Indica un nùmero del 1 al 10"; */
let listas_numeros_jugados=[];
let numero_maximo=10;
let numeroSecreto=generarNumeroSecreto();

let intentos=1;
function generarNumeroSecreto(){
    numero=Math.floor(Math.random()*numero_maximo)+1;
    console.log(numero)
    console.log(listas_numeros_jugados);
    // Si ya sorteamos todos los numeros
    if(listas_numeros_jugados.length==numero_maximo){ 
        asignarTextoElemento('p','Ya se sortearon todos los nùmeros posibles');
        document.getElementById("reiniciar").getAttribute("disabled")

    }
    else{
        if (listas_numeros_jugados.includes(numero)) {
            return generarNumeroSecreto();
        } else {
            listas_numeros_jugados.push(numero);
            return numero;
            
        }

    }
   

}
function verificarIntento() {
    let numeroDelUsuario = document.getElementById("valorUsuario").value;
    console.log(intentos)
    if (numeroDelUsuario==numeroSecreto) {
        asignarTextoElemento('p',`Acertaste, el numero en ${intentos} ${intentos==1 ? "vez" : "veces"}  `)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        limpiarCaja();
        if (numeroSecreto>numeroDelUsuario) {
            asignarTextoElemento('p','El nùmero secreto es mayor')
        } else {
            asignarTextoElemento('p','El nùmero secreto es menor')

        }
        intentos++;
       
        
    }
}
function limpiarCaja(){
   let valorCaja= document.getElementById("valorUsuario");
   valorCaja.value='';
}
function reiniciarJuego(){
    //limpiar Caja
    limpiarCaja()
    //Indicar mensaje de numeros
    //generar el numero
    condicionesIniciales()
    //deshabilitar el numero
    document.getElementById("reiniciar").getAttribute("disabled")
    //inicializar el numero de intentos
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Bienvenido al juego");
    asignarTextoElemento("p",`Indica un nùmero del 1 al ${numero_maximo}`);
    intentos=1;
    numeroSecreto=generarNumeroSecreto();
    //numeroSecreto=generarNumeroSecreto();
}
function alertfunction() {
    alert("¡Hola, has hecho clic en el botón!");
}

function asignarTextoElemento(elemento,texto){
    let asignarTexto=document.querySelector(elemento);
    asignarTexto.innerHTML=texto;
    return
}


asignarTextoElemento("h1","Bienvenido al juego");
asignarTextoElemento("p","Indica un nùmero del 1 al 10");