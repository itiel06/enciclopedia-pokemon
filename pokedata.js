const boton = document.getElementById('boton')

export const pokedata = [{

ID: 1,
Nombre:"Bulbasaur",
Tipos: ["Planta","Veneno"],
Evoluciones: ["Ivysaur", "Venusaur"],
megaevoluciones: [],
Altura: "0.7",
peso: "6.9 kg",
Habilidades: ["Espesura", "Clorofila (oculta)"],
Imagen: './image/bulbasaur.png',
Especie: 'El pokemon semilla',
Descripcion: "Lleva un bulbo en el lomo desde que nace. A medida que el Pokémon crece, el bulbo también va haciéndose más grande. Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.",

},

{

ID: 2,
Nombre:'Ivysaur',
Tipos:["Planta", "Veneno"],
Evoluciones:["Bulbasaur","Venusaur"],
megaevoluciones: [''],
Altura:'1.0 m',
peso:"13.0 kg",
Habilidades:'Espesura, Clorofila (habilidad oculta)',
Imagen:'./image/ivysaur-lead.jpg',
Especie:'El Pokémon semilla',
Descripcion:"Cuanta más luz solar recibe, más aumenta su fuerza y más se desarrolla el capullo que tiene en el lomo. El capullo desprende un aroma delicioso cuando está a punto de florecer.",
},

{

ID: 3,
Nombre:'Venusaur',
Tipos:["Planta", "Veneno"],
Evoluciones:["Bulbasaur","Ivysaur"],
megaevoluciones: ['Mega Venusaur'],
Altura:'2.0 m',
peso:"100.0 kg",
Habilidades:'Espesura, Clorofila (habilidad oculta)',
Imagen:'./image/Venusaur.avif',
Especie:'El Pokémon semilla',
Descripcion:"La planta que tiene en el lomo florece al absorber energía solar. Se dice que su flor emite un aroma relajante que calma a quienes lo rodean.",
},

{

ID: 4,
Nombre:'Charmander',
Tipos:["Fuego"],
Evoluciones:["Charmeleon","Charizard"],
megaevoluciones: [''],
Altura:'0.6 m',
peso:"8.5 kg",
Habilidades:'Mar Llamas, Poder Solar (oculta)',
Imagen:'./image/charmander.jpg',
Especie:'El Pokémon lagartija',
Descripcion:"La llama que tiene en la punta de la cola arde según su estado emocional. Si está sano, la llama arde con fuerza. Si está débil, la llama se apaga.",

},

{

ID: 5,
Nombre:'Charmeleon',
Tipos:["Fuego"],
Evoluciones:["Charmander","Charizard"],
megaevoluciones: [''],
Altura:'1.1 m',
peso:"19.0 kg",
Habilidades:'Mar Llamas, Poder Solar (oculta)',
Imagen:'./image/Charmeleon.webp',
Especie:'El Pokémon llama',
Descripcion:"Charmeleon tiene una naturaleza agresiva. En combate, agita su cola llameante y lanza llamaradas que pueden alcanzar temperaturas altísimas. Cuando se enfurece, la llama de su cola arde con un tono azulado.",

},

{

ID: 6,
Nombre:'Charizard',
Tipos:["Fuego","Volador"],
Evoluciones:["Charmander","Charmeleon"],
megaevoluciones: ['Mega Charizard X', 'Mega Charizard y'],
Altura:'1.7 m',
peso:"90.5 kg",
Habilidades:'Mar Llamas, Poder Solar (oculta)',
Imagen:'./image/charizard-pokemon.avif',
Especie:'El Pokémon llama',
Descripcion:"Charmeleon tiene una naturaleza agresiva. En combate, agita su cola llameante y lanza llamaradas que pueden alcanzar temperaturas altísimas. Cuando se enfurece, la llama de su cola arde con un tono azulado.",

},

{

ID: 7,
Nombre:'Squirtle',
Tipos:["Agua"],
Evoluciones:["Wartortle","Blastoise"],
megaevoluciones: [''],
Altura:'0.5 m',
peso:"9.0 kg",
Habilidades:'Torrente (habilidad principal), Cura Lluvia (habilidad oculta)',
Imagen:'./image/squirtle.png',
Especie:'El Pokémon tortuguita',
Descripcion:"Cuando se siente amenazado, Squirtle se esconde dentro de su caparazón y lanza agua a presión. Su caparazón redondeado le permite nadar con gran agilidad.",

},

{

ID: 8,
Nombre:'Wartortle',
Tipos:["Agua"],
Evoluciones:["Squirtle","Blastoise"],
megaevoluciones: [''],
Altura:'1.0 m',
peso:"22.5 kg",
Habilidades:'Torrente (habilidad principal), Cura Lluvia (habilidad oculta)',
Imagen:'./image/Wartortle.jpg',
Especie:'El Pokémon tortuga',
Descripcion:"Wartortle usa su cola peluda para mantener el equilibrio mientras nada. Su pelaje es tan distintivo que algunos lo consideran símbolo de longevidad. Las marcas en su caparazón indican que ha vivido muchas batallas.",

},

{

ID: 9,
Nombre:'Blastoise',
Tipos:["Agua"],
Evoluciones:["Squirtle","Blastoise"],
megaevoluciones: ['Mega Blastoise'],
Altura:'1.6 m',
peso:"85.5 kg",
Habilidades:'Torrente (habilidad principal), Cura Lluvia (habilidad oculta)',
Imagen:'./image/blastoise.webp',
Especie:'El Pokémon mar tortuga',
Descripcion:"Blastoise posee cañones de agua retráctiles en su caparazón, capaces de disparar chorros a gran presión. Usa su peso para estabilizarse mientras lanza ataques potentes.",

},

{

ID: 10,
Nombre:'Caterpie',
Tipos:["Bicho"],
Evoluciones:["Metapod","Butterfree"],
megaevoluciones: [''],
Altura:'0.3 m',
peso:"2.9 kg",
Habilidades:'Polvo Escudo (habilidad principal), Fuga (habilidad oculta)',
Imagen:'./image/Caterpie.webp',
Especie:'El Pokémon gusano',
Descripcion:"Caterpie tiene un cuerpo suave y segmentado, ideal para moverse entre hojas. Su antena roja desprende un olor fuerte que ahuyenta a los enemigos. Se alimenta de hojas grandes y crece rápidamente.",

},

]

