/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numerouno;
	var numerodos;
	var resto;

	numerouno = document.getElementById("txtIdNumeroDividendo").value;

	numerouno = parseInt(numerouno);

	numerodos = document.getElementById("txtIdNumeroDivisor").value;

	numerodos = parseInt(numerodos);
	
	resto = numerouno % numerodos;
	
	alert("El Resto es " + resto);

}
