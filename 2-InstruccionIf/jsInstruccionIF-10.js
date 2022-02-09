function mostrar()
{
	var nota;
	var mensajeUno;
	var mensajeDos;
	var mensajeTres;

	mensajeUno = "EXCELENTE";
	mensajeDos = "APROBO";
	mensajeTres = "Vamos, la proxima se puede";
	
	nota = Math.floor(Math.random() * 10) + 1;

	if(nota > 8){

		alert(nota + " " + mensajeUno);

	}
	else if (nota > 3 && nota < 9){

		alert(nota + " " + mensajeDos);

	}
	else if (nota < 4) {

		alert(nota + " " + mensajeTres);

	}

}//FIN DE LA FUNCIÓN