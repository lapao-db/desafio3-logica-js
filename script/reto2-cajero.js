// ------------ RETO 2- CAJERO AUTOMÁTICO ------- 
//Declaracion de variables
const botonR2 = document.getElementById("boton-r2");

//Evento
botonR2.addEventListener("click",retiroCajero)

//Funcion que valida el pin de usuario y ejecuta proceso de retiro
function retiroCajero() {
    // 1. Datos del usuario
    let pin = 1234;
    let saldoDisp = 100000;

    //Definicion de variables
    let clave = "";
    let siRetiro = false;
    let valorRetiro = 0;
    //let nuevoSaldo;
    let mensajeRetiroSalida ="¿Deseas retirar dinero? o Salir \n Clic en Aceptar para continuar o en Cacelar para no retirar y salir"; 

    // Pedir Pin al usuario
    clave = prompt("Ingrese su clave");
    let pinIngresado = parseInt(clave); // convertirlo de String a Entero


    // Condicional para verificar pin de ingreso
    if (pinIngresado == pin){

        alert("Tu saldo disponible es: " + saldoDisp);
        
        //Buleano que me permite confirmar si continuo en el retiro o salgo de la operación
        siRetiro = confirm (mensajeRetiroSalida);

            //Bucle para retiro e ingreso al proceso
            while(siRetiro){
                
                valorRetiro =parseInt(prompt("Ingresa el monto a retirar."+ "\n $" + saldoDisp));
                
                if (isNaN(valorRetiro) || valorRetiro <= 0){

                    alert("Ingrese un valor válido.");
                    siRetiro = confirm (mensajeRetiroSalida);

                }else if (valorRetiro>=saldoDisp) {
                    
                    alert("Fondos insuficientes.");
                    siRetiro = confirm (mensajeRetiroSalida);

                } else {
                    // caso en el que el valor del retiro sea menor al saldo y un valor real.
                    saldoDisp -= valorRetiro;
                    alert("Retiro Exitoso. Su nuevo saldo es de "+ saldoDisp);
                    siRetiro = confirm (mensajeRetiroSalida);
                    console.log(saldoDisp);
                }
            }
        
        }else {
        alert("Clave Incorrecta. Vuelva a intentarlo.")
        
    }
}
