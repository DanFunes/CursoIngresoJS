/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombredeusuario;
	var edad;
	nombredeusuario = document.getElementById ("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	alert("Usted se llama "+ nombredeusuario + " y tiene " + edad + " años");
	
}

