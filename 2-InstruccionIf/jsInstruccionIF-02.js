function mostrar()
{
	var edad;
	var mensaje;

	mensaje = "Eres mayor de edad";

	edad = document.getElementById("txtIdEdad").value;
	edad = parseFloat(edad);

	if(edad > 17){

		alert(mensaje);

	}
	
}//FIN DE LA FUNCIÓN