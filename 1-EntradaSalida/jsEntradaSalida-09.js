/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var porcentaje;
	var resultado;

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseFloat(sueldo);

	porcentaje = sueldo * 0.1 ;
	
	resultado = sueldo + porcentaje; 

	document.getElementById("txtIdResultado").value = resultado;

}
