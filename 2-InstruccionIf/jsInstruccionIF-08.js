function mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje;

	mensaje = "Es soltero y no es menor";
	
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseFloat(edad);

	if ( edad > 17 && estadoCivil == "Soltero" ){

		alert(mensaje);

	}

}//FIN DE LA FUNCIÓN