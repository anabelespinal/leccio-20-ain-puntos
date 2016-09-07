var myName=prompt("INSERTA TU NOMBRE"); 

function tiempoTranscurrido() {
    setTimeout(function(){ 
    	document.getElementById("miResultado").innerHTML="Hi " + myName + " :) !! " + "<br>" + "How it´s going?.. ";
    	 }
    	 , 3000);
};