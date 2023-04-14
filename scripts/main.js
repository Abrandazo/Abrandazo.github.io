


//const html = document.getElementsByTagName("html")[0];
//console.log(html);


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
const colores= ["#FF0000", "#00FF00", "#0000FF"];
let indiceColores = 0;


setInterval(function(){
    //const cambiarColor = random_rgba()
    //document.body.style.backgroundColor = cambiarColor;
    document.body.style.backgroundColor = colores[indiceColores];
    indiceColores++;
    if (colores.length===indiceColores)
    {
        indiceColores=0
    }

}, 50000);


//const miTitulo = document.querySelector('h1');
//miTitulo.textContent = '¡Hola mundo!';

//let nombreDeLaVariable;

/*  document.querySelector('html').onclick = function() {
      alert('¡Ouch! ¡Deja de pincharme!');
  }
*/

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
        miImage.setAttribute('src','images/firefox2.png');
    } else {
        miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
  }
}


if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}



