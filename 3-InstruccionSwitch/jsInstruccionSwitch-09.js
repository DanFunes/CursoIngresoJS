function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var precioFinal;
	var precio;

	precio = 15000
	
	switch(estacionIngresada) {
		case "Invierno":
			switch(destino) {
				case "Bariloche":
					precioFinal = precio + (precio * 0.2);
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = precio - (precio * 0.1);
					break;
				case "Mar del plata":
					precioFinal = precio - (precio * 0.2);
					break;
			}break;
		case "Verano":
			switch(destino) {
				case "Bariloche":
					precioFinal = precio - (precio * 0.2);
					break;
				case "Cataratas":
				case "Cordoba":
					precioFinal = precio + (precio * 0.1);
					break;
				case "Mar del plata":
					precioFinal = precio + (precio * 0.2);
					break;
			}break;
		case "Otoño":
		case "Primavera":
			switch(destino) {
				case "Cordoba":
					precioFinal = precio;
					break;
				default:
					precioFinal = precio + (precio * 0.1);
					break;
			}break;
	}
	alert("$ " + precioFinal);

}//FIN DE LA FUNCIÓN