function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	//alert(mesDelAño);
	switch (mesDelAño) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Si tiene 31 dias.");
			break;
		case "Febrero":
			alert("Si tiene 28 dias.");
			break;
		default:
			alert("Si tiene 30 dias.");
			break;
	}
	
}//FIN DE LA FUNCIÓN