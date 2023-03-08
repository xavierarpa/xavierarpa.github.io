var switchButton = document.getElementById("switch");

switchButton.onclick = function() 
{
    console.log("Switch");

	var body = document.getElementsByTagName("body")[0];
	
	if (body.style.backgroundColor === "black") {
		body.style.backgroundColor = "white";
		switchButton.style.backgroundColor = "black";
		switchButton.style.color = "white";
		switchButton.innerHTML = "Cambiar a fondo negro";
	} else {
		body.style.backgroundColor = "black";
		switchButton.style.backgroundColor = "white";
		switchButton.style.color = "black";
		switchButton.innerHTML = "Cambiar a fondo blanco";
	}
};
