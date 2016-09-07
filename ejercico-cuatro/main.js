window.addEventListener("load", function () { 
	var boton = document.getElementById("cambiar");
	boton.addEventListener("click", function procesarDatos() {
		var altura = parseInt(document.getElementById("alturaDiv").value);
		var ancho = parseInt(document.getElementById("anchoDiv").value);
		modificar(ancho,altura);
	});
	function modificar (ancho,altura) {
		document.getElementById("divRespuesta").style.height = ancho +"px";
		document.getElementById("divRespuesta").style.width = altura + "px";
	};	
});



