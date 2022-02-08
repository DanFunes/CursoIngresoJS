function mostrar()
{
	var edad;
	var mensaje;

	mensaje = "Niña Bonita";

	edad = document.getElementById("txtIdEdad").value;
	edad = parseFloat(edad);

	if(edad == 15){

		alert(mensaje);
	};

}