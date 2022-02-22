/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");

	while(!(claveIngresada === "utn750"))
	{
		prompt ("Clave invalida. Reingrese la clave");
		
	}
	
	alert("Clave correcta " + claveIngresada);
	
	
}//FIN DE LA FUNCIÓN
