/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var preciototalDescuento;
    var marcaLampara;
    var precioTotal;
    var precio;
    var precioImpuesto;
    var iibb;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    precioTotal = 0;
    precio = 35;
    marcaLampara = document.getElementById("Marca").value; 

   //A

    if (cantidadLamparas > 5)
    {
        preciototalDescuento = precio * cantidadLamparas * 0.5;
    }
    
    //B

    if(cantidadLamparas == 5)
    {
        if (marcaLampara == "ArgentinaLuz") 
        {
            preciototalDescuento = precio * cantidadLamparas * 0.6;
        }
        else
        {
            preciototalDescuento = precio * cantidadLamparas * 0.7;
        }
    } 

    //C 

    if (cantidadLamparas == 4)
    {
        if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") 
        {
            preciototalDescuento = precio * cantidadLamparas * 0.75;
        }
        else 
        {
            preciototalDescuento = precio * cantidadLamparas * 0.8;
        }
    } 

    //D

    if (cantidadLamparas == 3)
    {
        if ( marcaLampara == "ArgentinaLuz")
        {
            preciototalDescuento = precio * cantidadLamparas * 0.85;
        }
        else if (marcaLampara == "FelipeLamparas")
        {
            preciototalDescuento = precio * cantidadLamparas * 0.90;
        }
        else 
        {
            preciototalDescuento = precio * cantidadLamparas * 0.95;
        }
    } document.getElementById("txtIdprecioDescuento").value= preciototalDescuento;

    //E

    if (preciototalDescuento > 120)
    {
        iibb = preciototalDescuento * 0.10;
        precioImpuesto = preciototalDescuento + iibb;
        alert("IIBB Usted pago " + precioImpuesto + ", siendo " + iibb + " el impuesto que se pago.")
    }

} 