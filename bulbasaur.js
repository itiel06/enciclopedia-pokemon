import { pokedata } from './pokedata.js'

const contenedorBulbasaur = document.getElementById('contenedorBulbasaur')

const boton = document.getElementById('boton')

const contenedor = document.getElementById('contenedor')

console.log(pokedata)

pokedata.forEach(pokemon =>{

const {ID,Nombre,Tipos,Evoluciones,Altura, peso,Imagen,Especie,Descripcion} =pokemon 
const clasesTipo = Tipos.map(tipo => `tipo-${tipo.toLowerCase()}`).join(" ");
const nombreUrl = Nombre.toLocaleLowerCase()


contenedorBulbasaur.innerHTML = `
<div class = 'contenedorbulbasaur1' >
<h1 class='nombrebulbasaur'>Bulbasaur</h1>

<div class= 'imagenpaginabulbasaur1'>
<img class='imagenpagbulbasaur' src="${'../image/Bulbasaurpagina.png'}"" alt="">
</div>

<p class="audiodelanime01"> Audio del anime </p>

<div class = 'audioBulbasaur'>
<audio id="bulbasauranime" controls src="../audio/pokemon bulbasaur sound anime.mp3"></audio>


<p > Audio del  juego </p>
<audio id="bulbasaurjuego"  controls src="../audio/Pokémon - Bulbasaur (Cry).mp3"  ></audio>

</div>

<div class = 'textobulbasaur'>
<p>Bulbasaur es el Pokémon Semilla que encarna el equilibrio entre criatura y planta, siendo el punto de partida de muchas aventuras en el universo Pokémon. Su ficha Pokédex más extendida lo describe como un ser que crece en simbiosis con la semilla que lleva en su lomo, alimentándose de ella y evolucionando junto a ella.</p>
</div>

<div class = 'datosbulbasaur'>
<p>Tipo: Planta / Veneno </p>
<p>Altura: 0.7 M </p>
<p>Peso: 6.9 kg </p>
<p>Especie: Pokemon Semilla </p>
<p>Evoluciones: Ivysaur → Venusaur </p>

<div class = 'textodejuegosbulbasaur'>
<h1>Primer juego en que aparecio</h1>
<p>Bulbasaur apareció por primera vez en Pokémon Red y Pokémon Blue, lanzados en 1996 en Japón. Fue el primer Pokémon registrado en la Pokédex Nacional, marcando el inicio de toda la saga.

<p>Era el año 1996. En la región de Kanto, un mundo pixelado lleno de criaturas misteriosas y entrenadores novatos, nacía una aventura que cambiaría la historia de los videojuegos. En el laboratorio del Profesor Oak, tres criaturas esperaban ser elegidas: un dragón de fuego, una tortuga acuática… y una semilla con alma de planta. Ese último era Bulbasaur, el Pokémon Semilla, el número #001 de la Pokédex.</p>

<p>
En Pokémon Red y Pokémon Blue, el jugador tomaba el rol de un joven entrenador que debía elegir su primer compañero. Si decidía no seguir el camino ardiente de Charmander ni el flujo tranquilo de Squirtle, podía optar por Bulbasaur: un ser híbrido entre reptil y planta, con una semilla en su espalda que crecía con él. Esta elección no era solo estética: Bulbasaur tenía ventajas tácticas en los primeros gimnasios, especialmente contra Brock (tipo roca) y Misty (tipo agua), lo que lo convertía en una opción estratégica para principiantes.</p>

<p>Su diseño fue creado por Ken Sugimori, y su nombre japonés, Fushigidane, significa “semilla misteriosa”. En combate, Bulbasaur dominaba movimientos como Latigazo Cepa y Drenadoras, y evolucionaba a Ivysaur en el nivel 16, y luego a Venusaur en el nivel 32, completando una narrativa de crecimiento vegetal y poder acumulado.</p>

<p>Pero Bulbasaur no solo vivía en el laboratorio. En el juego, podía encontrarse en estado salvaje en el Bosque Verde, aunque solo en versiones posteriores como Pokémon Yellow. En Red y Blue, su única vía de obtención era como inicial, lo que lo hacía aún más especial: era una elección, un vínculo, una historia compartida desde el primer paso del jugador.</p>

<p>Desde entonces, Bulbasaur ha sido símbolo de equilibrio, estrategia y evolución. Su aparición en Pokémon Red y Blue no fue solo técnica: fue narrativa. Fue el primer compañero posible, el primer número en la Pokédex, el primer vínculo entre jugador y criatura. Y así, con una semilla en la espalda y una mirada curiosa, Bulbasaur se convirtió en el punto de partida de millones de aventuras.</p>

<h2>curiosidades </h2>

<ul>

<li>001 en la Pokédex Nacional, pero no fue el primer Pokémon creado. Rhydon fue el primero diseñado.</li>

<li>Su nombre japonés es Fushigidane (フシギダネ), que significa “semilla misteriosa”.</li>

<li>Su diseño mezcla un reptil anfibio con una planta simbiótica, inspirada en la relación entre animales y flora.</li>

<li>El bulbo en su espalda crece con él y es el origen de su evolución.</li>

<li>Es el único Pokémon inicial con doble tipo desde su primera etapa: Planta/Veneno.</li>

<li>Su evolución está basada en el crecimiento de una planta: Bulbasaur → Ivysaur → Venusaur.</li>

<li>En el anime, el Bulbasaur de Ash nunca quiso evolucionar, lo que lo convirtió en símbolo de identidad y resistencia.</li>

<li>Su habilidad más común es Espesura, que potencia ataques Planta cuando tiene poca salud.</li>

<li>Tiene una alta defensa especial para su etapa evolutiva.</li>

<li>Puede aprender movimientos como Tormenta Floral, Gigadrenado, Síntesis y Bomba Lodo.</li>

<li>En generaciones recientes, puede usar Dinamax y aprender ataques como Maxiflora.</li>

<li>En 2016, un restaurante en Australia creó una hamburguesa temática de Bulbasaur con pan verde y decoración vegetal.</li>

<li>Fue uno de los Pokémon más populares durante el evento de Pokémon GO por el Día de la Comunidad.</li>

<li>En Japón, se han lanzado peluches, mochilas, zapatillas y hasta trenes decorados con Bulbasaur.</li>

<li>Es uno de los pocos Pokémon que ha aparecido en todas las generaciones de juegos principales.</li>

<li>En Detective Pikachu, aparece en una escena mágica guiando a los protagonistas por un bosque.</li>

<li>Su color verde representa vida, crecimiento y equilibrio natural.</li>

<li>El bulbo en su espalda recuerda a una semilla de loto o cebolla, dependiendo del artista.</li>

<li>En muchas ilustraciones oficiales, se lo representa mirando hacia arriba, como si esperara la luz del sol.</li>



</ul>
</p>
</div>
</div>
`






})