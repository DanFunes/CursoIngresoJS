function mostrar()
{
	var edad;
	var mensaje;
	var mensajeDos;
	var mensajeTres;

	mensaje = "Eres mayor de edad";
	mensajeDos = "Eres un adolecente";
	mensajeTres = "Eres un niño";

	edad = document.getElementById("txtIdEdad").value;
	edad = parseFloat(edad);

	if(edad > 17){

		alert(mensaje);

	}
	else if(edad >= 13 && edad <= 17){

		alert(mensajeDos);

	}
	else if(edad < 13){

		alert(mensajeTres);

	}

}//FIN DE LA FUNCIÓN