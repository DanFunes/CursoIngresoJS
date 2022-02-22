/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	var i;

	i=0
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado == 'f' && i < 1)
	{
		document.getElementById("txtIdSexo").value= "Femenino";
		i ++;
	}
	while (sexoIngresado == 'm' && i < 1)
	{
		document.getElementById("txtIdSexo").value= "Masculino";
		i ++;
	}

	
}//FIN DE LA FUNCIÓN