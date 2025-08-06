//  ------------ RETO 3 - TABLAS DE MULTIPLICAR ----------
//Declaracion de variables
const botonR3 = document.getElementById("boton-r3");

//Evento
botonR3.addEventListener("click",generarTabla)

function generarTabla(){
	
	//Inicializacion variables
	let numero = "";
	let tabla = "";
	let noSalir = true;

	//Blucle que se mantiene activo generando tablas con valor ingresado por el usuario hasta que confirme que desea salir.

	while (noSalir){
		numero = prompt("Ingresa el número para ver la tabla de multiplicar");
		tabla = "Tabla del " + numero +" \n" ;
		let mult = 0;
		let num = parseInt(numero);

		if (!isNaN(num)){
			for (i=1;i<=10;i++){
			mult = num*i;
			tabla +=(num + " x " + i +" = " + mult + "\n");
			}
			alert(tabla);
			noSalir= confirm("Clic Cancelar para Salir o Aceptar para Continuar");
		} else{
			alert("Entrada inválida. Por favor, ingrese un número.");
			noSalir= confirm("Clic en Aceptar para Continuar o Cancelar para Salir");
			console.log(typeof(noSalir));
		}
		
	}

}


