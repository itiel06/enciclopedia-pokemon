
import { pokedata } from './pokedata.js';

const boton = document.getElementById('boton')

const contenedor = document.getElementById('contenedor')

console.log(pokedata)

pokedata.forEach(pokemon =>{

const {ID,Nombre,Tipos,Evoluciones,Altura, peso,Imagen,Especie,Descripcion} =pokemon 
const clasesTipo = Tipos.map(tipo => `tipo-${tipo.toLowerCase()}`).join(" ");
const nombreUrl = Nombre.toLocaleLowerCase()

contenedor.innerHTML += `
<div class='contenedor1 ${clasesTipo}'>
<div class='contenedorTextos'>
<p id='id' class='idgeneral' >${ID}</p>
<p id='especie' class='especiegeneral'>${Especie}</p>
<p id='nombre' class='nombregeneral'>${Nombre}</p>
</div>
<div class='imagenContainer'>
<img class="imagenDelPokemon" src="${Imagen}" alt="">
</div>
<h1 id='tipo' class='tipogeneral'>${Tipos}</h1>
<h2 id='descripcion' class='descripciongeneral' >${Descripcion}</h2>
<button class = 'pokeBoton'onclick="location.href='./page/${nombreUrl}.html'" class="botondetalle">Ver más</button>
</div>
`

})



