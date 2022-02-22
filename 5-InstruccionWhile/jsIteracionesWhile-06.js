function mostrar()
{
	var acumulador;
	var numero;
	var i;

	i=0;
	acumulador=0;

	while(i < 5)
	{
		numero = parseInt(prompt("Ingrese un numero: "));

		acumulador = acumulador + numero;

		i ++;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
	
}//FIN DE LA FUNCIÓN