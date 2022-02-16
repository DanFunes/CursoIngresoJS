function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);
	switch (mesDelAño) {
		case "Enero" :
			alert("Es " + mesDelAño + " que comiences bien el año");
			break;
		case "Marzo" :
			alert("Es " + mesDelAño + " a clases!");
			break;
		case "Julio" :
			alert("Es " + mesDelAño + " se vienen las vacaciones");
			break;
		case "Diciembre" :
			alert("Es " + mesDelAño + " Felices fiestas!");
			break;
		
		default:
			alert("Es " + mesDelAño);
			break;
	}

}//FIN DE LA FUNCIÓN