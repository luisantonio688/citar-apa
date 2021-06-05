function notEmpty() {
	var myText1 = document.getElementById('autor');
	var myText2 = document.getElementById('publicacion');
	var myText3 = document.getElementById("titulo");
	var myText4 = document.getElementById('fechaconsulta');
	var myText5 = document.getElementById('asociacionpublicadora');
	var myText6 = document.getElementById('urlsitio');

	if(myText1.value != "" && myText2.value != "" && myText3.value != "" && myText4.value != "" && myText5.value != ""&& myText6.value != "")
		document.getElementById("citagenerada").innerHTML= (myText1.value +". (" +   myText2.value   +"). " + myText3.value+ '. ' + myText4.value +", de " + myText5.value + "." +" Sitio web: " + myText6.value);		 
	else
		alert("Te faltó llenar algun dato.");
}