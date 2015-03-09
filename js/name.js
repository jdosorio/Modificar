function init (){

$.ajax({
		  type: "GET",
		  url: "core/controller.php",
		  success: function(data)
		  {
		   var obj= JSON.parse(data);
		   var resultados = "";
		   

		   for (var key in obj.menu) {
             resultados+= "<li><a href='"+obj.menu[key]+"'>"+ key +"</a></li>";
            }


		   
			  $("#menu").html(resultados);
			  $("#usuario").html(obj.usuario.user);
			  $("#perfil").html(obj.usuario.perfil);

		  }, error: function(data){alert(data);}
		});

}
