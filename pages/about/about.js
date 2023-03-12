const { css, environment } = require("../../assets/js/environment.js");


// Aquí va todo el código JS
document.addEventListener(environment.dom.keys.onLoaded, function(event) 
{
    console.log("about.js");
});

// var body = document.body;
// if (body.style.backgroundColor === "black") {
//     body.style.backgroundColor = "white";
//     switchButton.style.backgroundColor = "black";
//     switchButton.style.color = "white";
//     switchButton.innerHTML = "Cambiar a fondo negro";
// } else {
//     body.style.backgroundColor = "black";
//     switchButton.style.backgroundColor = "white";
//     switchButton.style.color = "black";
//     switchButton.innerHTML = "Cambiar a fondo blanco";