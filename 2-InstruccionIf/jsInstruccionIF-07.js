function mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje;

	mensaje = "Es muy pequeño para NO ser soltero";
	
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseFloat(edad);

	if(edad < 18 && estadoCivil != "Soltero"){

		alert(mensaje);

	}

}//FIN DE LA FUNCIÓN