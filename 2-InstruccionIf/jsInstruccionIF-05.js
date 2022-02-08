function mostrar()
{
	var edad;
	var mensaje;

	mensaje = "No eres un adolecente";

	edad = document.getElementById("txtIdEdad").value;
	edad = parseFloat(edad);

	if(edad > 17 || edad < 13) {

		alert(mensaje);

	}

}//FIN DE LA FUNCIÓN