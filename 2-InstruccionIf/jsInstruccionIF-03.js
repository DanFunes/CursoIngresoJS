function mostrar()
{
	var edad;
	var mensaje;
	var mensajeDos;

	mensaje = "Eres mayor de edad";
	mensajeDos ="Eres menor de edad";
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseFloat(edad);

	if(edad > 17){

		alert(mensaje);

	}
	else {

		alert(mensajeDos);

	}



}//FIN DE LA FUNCIÓN