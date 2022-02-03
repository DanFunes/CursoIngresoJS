/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	
	var resta;

	numerouno = document.getElementById("txtIdNumeroUno").value;

	numerodos = document.getElementById("txtIdNumeroDos").value;

	resta = numerouno - numerodos;

	alert("La resta es " + resta);
}

function multiplicar()
{ 
	var multiplicar;

	numerouno = document.getElementById("txtIdNumeroUno").value;

	numerodos = document.getElementById("txtIdNumeroDos").value;

	multiplicar = numerouno * numerodos;

	alert("La multiplicacion es " + multiplicar);
}

function dividir()
{
	var division;

	numerouno = document.getElementById("txtIdNumeroUno").value;

	numerodos = document.getElementById("txtIdNumeroDos").value;

	division = numerouno / numerodos;

	alert("La division es " + division);
}

