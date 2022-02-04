/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
    var fahrenheitacentigrados; //cambiar temperatura por fahrenheit y fahrenheitcentigrados por centigrados. agragar var mensaje

    temperatura = document.getElementById("txtIdTemperatura").value;

    temperatura = parseFloat(temperatura);

    fahrenheitacentigrados = (temperatura - 32) / 1.8 ;

    alert(temperatura + " Fahrenheit son " + fahrenheitacentigrados.toFixed(2) + " Centigrados");

}

function CentigradosFahrenheit () 
{
	var centigradosafahrenheit;

    temperatura = document.getElementById("txtIdTemperatura").value;

    temperatura = parseFloat(temperatura);

    centigradosafahrenheit = temperatura * 1.8 + 32 ;

    alert(temperatura + " Centigrados son " + centigradosafahrenheit + " fahrenheit");

}
