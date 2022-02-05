/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
//function mostrar()
{
	//alert("Esto funciona de maravilla");
}

function mostrar ()
{
	var nombre1;
	var nombre2;
	var nombre3;
	var precio1;
	var precio2;
	var precio3;
	var preciobruto;
	var promedioproductos;
	var preciototaliva;
	var porcentajedescuento;
	var preciototaldescuento;
	var descuentoaplicado;
	var iva;
	var mensaje;

	iva = 21

	nombre1 = prompt("Nombre del producto 1");
	precio1 = prompt("Ingrese precio de " + nombre1);
	precio1 = parseFloat(precio1);

	nombre2 = prompt("Nombre del producto 2");
	precio2 = prompt("Ingrese precio de " + nombre2);
	precio2 = parseFloat(precio2);


	nombre3 = prompt("Nombre del producto 3");
	precio3 = prompt("Ingrese precio de " + nombre3);
	precio3 = parseFloat(precio3);

	preciobruto = precio1 + precio2 + precio3;

	promedioproductos = preciobruto / 3 ;

	ivacalculado = preciobruto / 100 * iva ;

	preciototaliva = preciobruto + ivacalculado;

	porcentajedescuento = prompt("Ingrese el % de Descuento que desea aplicar al precio");
	porcentajedescuento = parseFloat(porcentajedescuento);

	descuentoaplicado = preciobruto * porcentajedescuento / 100 ;

	preciototaldescuento = preciobruto - descuentoaplicado ;

	mensaje = "Los productos con su precio son: ";
	mensaje = mensaje + nombre1 + " $" + precio1 + " ,";
	mensaje = mensaje + nombre2 + " $" + precio2 + " ,";
	mensaje = mensaje + nombre3 + " $" + precio3 + " ,";
	mensaje = mensaje + "Precio Bruto: $" + preciobruto + " ,";
	mensaje = mensaje + "Promedio: $" + promedioproductos.toFixed(2) + " ,";
	mensaje = mensaje + "El precio mas IVA: $" + preciototaliva + " ,";
	mensaje = mensaje + "El precio final con el " + porcentajedescuento + "% de Descuento: " + preciototaldescuento;

	alert(mensaje)

	//Dante Funes Division B

}