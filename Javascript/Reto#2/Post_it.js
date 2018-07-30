//DECLARACION DE VARIABLES

//Boton que crea los post-it
var btn = document.getElementById("btn");

//Contador de post-it
var i = 0;

//DECLARACION DE FUNCIONES
function Eliminar(e)
{
	var iHijo = e.target.id.substring(8);
	//alert("Eliminando nota: cj"+del);

	//Eliminación del post-it
	var padre = document.getElementById("posts");
	var hijo = document.getElementById("cj"+iHijo);
	var basura = padre.removeChild(hijo);
	basura = null;

}

function Nota()
{
	//Creación de un contenedor para el post-it
	var caja = document.createElement("div");
	caja.className = "cj";
	caja.id = "cj"+i;

	//Codigo del post-it
	var codigo = "";
	codigo += "<label class='title' for='titulo"+i+"' >Titulo:</label></br><textarea id='titulo"+i+"' rows='1' cols='25' placeholder='Titulo'></textarea></br>";
	codigo += "<label class='contenido' for='cont"+i+"' >Contenido:</label></br><textarea id='cont"+i+"' rows='5' cols='25' placeholder='Contenido'></textarea></br>"
	
	//Creación del boton para eliminar el post-it
	eliminarNota = document.createElement("button");
	eliminarNota.className = "eliminar";
	eliminarNota.id = "eliminar"+i;
	eliminarNota.innerHTML = "Eliminar";
	caja.innerHTML = codigo;

	//Añadir el post-it al contenedor
	caja.appendChild(eliminarNota);

	//Añadir el contenedor al documento html
	document.getElementById("posts").appendChild(caja);

	i++;

	//Evento para el boton eliminar
	eliminarNota.addEventListener('click',Eliminar);
}

//ASIGNACION DE EVENTOS
window.onload = function()
{
	btn.addEventListener("click",Nota);
}