window.addEventListener("load", function () { 
	var boton = document.getElementById("cambiar");
	boton.addEventListener("click", function() {
		var color = document.getElementById("ingresaColor").value;
		setTimeout(function() {document.body.style.background = color; } , 2000);
	})
})