
 function validacion(mail) {



	var nombre = document.getElementById('nombre').value;
	var mail = document.getElementById('mail').value;
	var tel = document.getElementById('tel').value;
	var subject = document.getElementById('subject').value;
	var comentarios = document.getElementById('comentarios').value;


	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

	if(nombre != "" && mail != "" && tel != "" && subject != "" && comentarios!= ""){

	if(!re.exec(mail)){

	  alert('ingrese un mail valido');
      return (false);
	  
	}
	
	else{
      
	  alert('Se abrira una ventana para enviar tu mensaje');
	  window.location.href ='mailto:mydonut@gmail.com?subject='
                         + encodeURIComponent(subject)
                         + "&body=" 
                         + encodeURIComponent(
					     "Nombre y Apellido: " + nombre + "\r" +
						 "Mail: " + mail + "\r" +
						 "Tel: " + tel + "\r" +
						 "Comentarios: " + comentarios);
		
	}
}}