
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
<h3 id='id' class='idgeneral' >${ID}</h3>
<h2 id='especie' class='especiegeneral'>${Especie}</h2>
<h1 id='nombre' class='nombregeneral'>${Nombre}</h1>
<img class="imagenDelPokemon" src="${Imagen}" alt="">
<h1 id='tipo' class='tipogeneral'>${Tipos}</h1>
<h2 id='descripcion' class='descripciongeneral' >${Descripcion}</h2>
<button onclick="location.href='${nombreUrl}.html'" class="botondetalle">Ver más</button>
</div>
`

})



