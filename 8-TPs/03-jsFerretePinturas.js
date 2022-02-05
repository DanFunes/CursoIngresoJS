/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
    var centigrados; //cambiar temperatura por fahrenheit y fahrenheitcentigrados por centigrados

    fahrenheit = document.getElementById("txtIdTemperatura").value;

    fahrenheit = parseFloat(fahrenheit);

    centigrados = (fahrenheit - 32) / 1.8 ;

    alert(fahrenheit + " Fahrenheit son " + centigrados.toFixed(2) + " Centigrados");

}

function CentigradosFahrenheit () 
{
	var centigrados;
    var fahrenheit;

    centigrados = document.getElementById("txtIdTemperatura").value;

    centigrados = parseFloat(centigrados);

    fahrenheit = centigrados * 1.8 + 32 ;

    alert(centigrados + " Centigrados son " + fahrenheit + " fahrenheit");

}
