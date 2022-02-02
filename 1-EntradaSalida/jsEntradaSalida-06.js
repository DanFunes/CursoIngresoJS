/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno;
	var numerodos;
	var suma;


	numerouno = document.getElementById("txtIdNumeroUno").value;

	numerouno = parseInt(numerouno)

	numerodos = document.getElementById("txtIdNumeroDos").value;

	numerodos = parseInt(numerodos);

	suma = numerouno + numerodos;

	alert("La suma es " + suma);
}

