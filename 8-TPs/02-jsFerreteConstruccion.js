/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambrerectangulo;
    var cantidadvueltas;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);

    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    cantidadvueltas = 3

    perimetro = (ancho + largo) * 2 ;
    alambrerectangulo = perimetro * cantidadvueltas ;
    
    alert("La cantidad de alambre a comprar es " + alambrerectangulo);

}
function Circulo () 
{
	var radio;
    var vueltas;
    var perimetroCirculo;
    var alambreCirculo;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio)

    vueltas = 3

    perimetroCirculo = 2 * Math.PI * radio;
    alambreCirculo = perimetroCirculo * vueltas;

    alert("La cantidad de alambre a comprar es " + alambreCirculo.toFixed(2))

}
function Materiales () 
{

        var largoDelTerreno;
        var anchoDelTerreno;
        var areaDelTerreno;
        var bolsaDeCemento;
        var bolsaDeCal;
        var mensaje;
    
        largoDelTerreno= document.getElementById("txtIdLargo").value;
        anchoDelTerreno= document.getElementById("txtIdAncho").value;
    
        largoDelTerreno= parseFloat(largoDelTerreno);
        anchoDelTerreno= parseFloat(anchoDelTerreno);
    
        areaDelTerreno= largoDelTerreno * anchoDelTerreno;
        bolsaDeCemento= areaDelTerreno * 2;
        bolsaDeCal= areaDelTerreno * 3;
         //console.log(bolsaDeCal, bolsaDeCemento);
    
         mensaje = "la cantidad de bolsas de cemento a comprar son " + bolsaDeCemento; 
         mensaje += " y la cantidad de bolsas de cal a comprar son " + bolsaDeCal;
    
        alert(mensaje);
     }