function mostrar()
{
	var edad;
	var nombre;
	var mensaje;
	var estadoCivil;

	nombre = prompt("Decime tu nombre", "");
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;
	
	
	if(edad < 13)
	{
		mensaje = "Feliz dia";
		
		if(nombre == "Ricardo")
		{
			mensaje = mensaje + ", muy chiquito para ese nombre";
		}
	}
	
	else 
	{
		mensaje= "Usted es adolecente";

		if (estadoCivil == "Divorciado")
		{
			mensaje = mensaje + ", toda una vida por delante";
		}

		if(nombre == "Violeta")
		{
			mensaje = mensaje + ", como un color";
		}

		if (edad == 17)
		{
			mensaje = mensaje + ", Ultimo año";
		}

	}

	if (edad > 17)
	{
		mensaje = "Tienes edad de laburar";

		if(estadoCivil == "Soltero" && edad < 61)
		{
			mensaje = mensaje + ", a salir";
		}

		if (edad == 33)
		{
			mensaje = mensaje + ", Como cristo";
		}
		if (edad > 60 && edad != 88 )
		{
			mensaje = mensaje + ", A jubilarse";
			
			if(nombre == "Alfredo")
			{
				mensaje = mensaje + ", como el de QUEEN";
			}
		}
		if (edad == 88)
		{
			mensaje = mensaje + ", Lindo numero";
		}
		 
	}

	if (edad % 2 === 0)
	{
		mensaje = mensaje + ", sos par!!";
	}

	if (edad > 13 && estadoCivil == "Casado")
	{
		mensaje = mensaje + ", casada quiere casa";
	}
	
	alert(mensaje);

}

//FIN DE LA FUNCIÓN