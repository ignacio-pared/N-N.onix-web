//=========================
// CAMBIAR IMAGEN
//=========================

function cambiarImagen(imagen){

    document.getElementById("imagenGrande").src = imagen.src;

}

//=========================
// SELECCIONAR TALLE
//=========================

let talles = document.querySelectorAll(".talles button");

talles.forEach(function(boton){

    boton.onclick = function(){

        talles.forEach(function(b){

            b.style.background = "transparent";
            b.style.color = "white";

        });

        boton.style.background = "white";
        boton.style.color = "black";

    }

});

//=========================
// SELECCIONAR COLOR
//=========================

let colores = document.querySelectorAll(".color");

colores.forEach(function(color){

    color.onclick = function(){

        colores.forEach(function(c){

            c.style.border = "2px solid white";

        });

        color.style.border = "3px solid #d4af37";

    }

});

//=========================
// ACORDEÓN
//=========================

let titulos = document.querySelectorAll(".titulo");

titulos.forEach(function(titulo){

    titulo.onclick = function(){

        let contenido = titulo.nextElementSibling;

        if(contenido.style.display == "block"){

            contenido.style.display = "none";

        }else{

            contenido.style.display = "block";

        }

    }

});

//=========================
// AGREGAR AL CARRITO
//=========================

let botonCarrito = document.querySelector(".carrito");

botonCarrito.onclick = function(){

    botonCarrito.innerHTML = "✔ AGREGADO AL CARRITO";

    botonCarrito.style.background = "#28a745";
    botonCarrito.style.color = "white";

    setTimeout(function(){

        botonCarrito.innerHTML = "AGREGAR AL CARRITO";

        botonCarrito.style.background = "white";
        botonCarrito.style.color = "black";

    },2000);

}
