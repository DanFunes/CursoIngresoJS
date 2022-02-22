/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero= false;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado =prompt("Ingrese su numero");
		numeroIngresado = parseInt (numeroIngresado);
		if (banderaDelPrimero == false)
		{
			banderaDelPrimero = true;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		else 
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}//FIN DE LA FUNCIÓN