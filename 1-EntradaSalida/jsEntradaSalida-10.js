/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var resultado;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseFloat(importe);

	porcentaje = importe * 0.25 ;
	
	resultado = importe - porcentaje; 

	document.getElementById("txtIdResultado").value = resultado;
}
