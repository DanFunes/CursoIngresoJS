function mostrar()
{
	var edad;
	var mensaje;

	mensaje = "Eres un adolecente";

	edad = document.getElementById("txtIdEdad").value;
	edad = parseFloat(edad);

	if(edad >= 13 && edad <= 17) {

		alert(mensaje);

	}


}//FIN DE LA FUNCIÓN