/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numerouno;
    var numerodos;
    var numerotres;
    var sumatotal;

    numerouno = document.getElementById("txtIdPrecioUno").value;
    
    numerouno = parseFloat(numerouno);
    
    numerodos = document.getElementById("txtIdPrecioDos").value;

    numerodos = parseFloat(numerodos);

    numerotres = document.getElementById("txtIdPrecioTres").value;

    numerotres = parseFloat(numerotres);

    sumatotal = numerouno + numerodos + numerotres;

    alert("La suma es " + sumatotal)
	
}
function Promedio () 
{
	var promedio;
    var sumatotal;

    numerouno = document.getElementById("txtIdPrecioUno").value;

    numerouno = parseFloat(numerouno);
    
    numerodos = document.getElementById("txtIdPrecioDos").value;

    numerodos = parseFloat(numerodos);

    numerotres = document.getElementById("txtIdPrecioTres").value;

    numerotres = parseFloat(numerotres);

    sumatotal = numerouno + numerodos + numerotres;

    promedio = sumatotal / 3 ;

    alert("El promedio es " + promedio.toFixed(2));
}
function PrecioFinal () 
{
    var sumatotal;
    var porcentaje;
    var preciofinal;

    numerouno = document.getElementById("txtIdPrecioUno").value;

    numerouno = parseFloat(numerouno);
    
    numerodos = document.getElementById("txtIdPrecioDos").value;

    numerodos = parseFloat(numerodos);

    numerotres = document.getElementById("txtIdPrecioTres").value;

    numerotres = parseFloat(numerotres);

    sumatotal = numerouno + numerodos + numerotres;

    porcentaje = sumatotal * 0.21 ;

    preciofinal = sumatotal + porcentaje ;

    alert("El precio final es " + preciofinal);

}