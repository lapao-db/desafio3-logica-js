// RETO 1 - SISTEMA DE VALIDACIÓN DE INGRESO
//Declaracion de variables
const botonR1 = document.getElementById("boton-r1");

//Evento
botonR1.addEventListener("click",ingresoInvitado)

function ingresoInvitado (){
    // Ingreso informacion Usuario
    let nombre = prompt("Ingrese su nombre completo");
    let edad = prompt("Ingresa edad");
    let esInvitado = confirm("Tiene invitación");

    edad = parseInt(edad);
    let nomMayus = nombre.toUpperCase(); // convierte mayus nombre ingresado por usuario

    console.log(typeof(edad));
    //console.log(typeof(nomMayus));
    if (edad >= 18 && esInvitado == true){
        alert (nomMayus + ", tienes permitido el ingreso al sistema.")
    } else {
        alert (nomMayus + " NO tienes permitido el acceso");
    }
}