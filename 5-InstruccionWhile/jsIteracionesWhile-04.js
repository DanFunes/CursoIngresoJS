/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var i;
	
	i = 0

	while(i < 1)
	{
		numeroIngresado =parseInt(prompt("ingrese un número entre 0 y 10."));
		document.getElementById("txtIdNumero").value= numeroIngresado;
		i ++;
	}
	
}//FIN DE LA FUNCIÓN