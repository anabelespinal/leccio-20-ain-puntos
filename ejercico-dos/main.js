window.addEventListener("load", function () { 
	var boton = document.getElementById("esperar");
	boton.addEventListener("click", function procesarDatos() {
		var tiempo = parseInt(document.getElementById("tiempoEspera").value);
		var texto = document.getElementById("textoIngresar").value;
		setTimeout(function(){
			document.getElementById("tuRespuesta").innerHTML = texto;
			}
		,tiempo*1000);
	});
});













