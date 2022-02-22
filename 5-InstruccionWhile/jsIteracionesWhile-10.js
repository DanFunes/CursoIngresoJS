/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var contadorNegativos=0;
	var sumaPositivos=0;
	var contadorPositivos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioNegativos=0;
	var promedioPositivos=0;
	var diferencia;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		if(numeroIngresado < 0)
		{
			sumaNegativos = numeroIngresado + sumaNegativos;
			contadorNegativos++;
		}
		else if(numeroIngresado == 0)
		{
			contadorCeros++;
		}
		else 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos++;
		}

		if(numeroIngresado % 2 == 0)
		{
			contadorPares++;
		}
		
		respuesta=prompt("desea continuar?");

	}//fin del while

	if(contadorPositivos > 0)
	{
		promedioPositivos= sumaPositivos / contadorPositivos;
	}
	if (contadorNegativos > 0)
	{
		promedioNegativos= sumaNegativos / contadorNegativos;
	}
	
	diferencia = contadorPositivos - contadorNegativos

	document.write("La suma de negativos es : "+sumaNegativos +'<br>');
	document.write("La suma de positivos es : "+sumaPositivos+ '<br>');
	document.write("La cantidad de numeros positivos es de : "+ contadorPositivos+'<br>');
	document.write("La cantidad de numeros negativos es de : "+contadorNegativos + '<br>');
	document.write("La cantidad de ceros es de : " +contadorCeros + '<br>');
	document.write("La cantidad de numeros pares es de : "+contadorPares + '<br>');
	document.write("El promedio de los numeros positivos es de : "+promedioPositivos + '<br>');
	document.write("El promedio de los numeros negativos es de : "+promedioNegativos + '<br>');
	document.write("La diferencia entre positivos y negativos es de : "+diferencia + '<br>');
}//FIN DE LA FUNCIÓN