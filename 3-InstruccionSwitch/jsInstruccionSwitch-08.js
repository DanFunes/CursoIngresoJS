function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert("Frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");
			break;
	}

}//FIN DE LA FUNCIÓN