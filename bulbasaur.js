import { pokedata } from './pokedata.js';

const boton = document.getElementById('boton')

const contenedor = document.getElementById('contenedor')

console.log(pokedata)

pokedata.forEach(pokemon =>{

const {ID,Nombre,Tipos,Evoluciones,Altura, peso,Imagen,Especie,Descripcion} =pokemon 
const clasesTipo = Tipos.map(tipo => `tipo-${tipo.toLowerCase()}`).join(" ");
const nombreUrl = Nombre.toLocaleLowerCase()

contenedor.innerHTML = `` 






})