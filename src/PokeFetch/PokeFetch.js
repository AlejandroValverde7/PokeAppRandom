/**
 * Clase que llama a todos los datos de la api para agregarlos
 */

/**
 * Saca pokemonRandom sacara 6 nombres de pokemos para 
 * posteriormente sacar los datos de cada uno
 * 
 * Este nos devuelve un array con todos los pokemon
 * sacaremos el nombre de 1 de forma aletoria
 * 
 * @returns {Array<String>} devuelve un array con los nombres de los pokemon random 
 */
const SacaEquipoPokemonRandom = async() =>{

    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const data = await res.json();

    let totPoke = data.count;
    let equipoPoke = [];

    for (let i = 0; i < 6; i++) {
        equipoPoke[i] = data.results[Math.floor(Math.random() * totPoke)]["name"];
        
    }

    return equipoPoke;

}

/**
 * Carga todos los datos de cada pokemon en un array
 * @param {Array<String>} equipo 
 * @returns {Array<Object>} Devuelve los datos de cada pokemon cargados en el array
 */
const datosPokemon = async(equipo) =>{
    let datosPoke = [];
    await equipo;

    //Guardamos los datos de cada pokemon
    for (let i = 0; i < equipo.length; i++) {
        datosPoke[i] = await fetch("https://pokeapi.co/api/v2/pokemon/"+equipo[i]);
        datosPoke[i] = await datosPoke[i].json();
    }

    return datosPoke;
}

/**
 * 
 *  Array con las imagenes del pokemon
 * Podemos sacar sus sprites  o sus gifs
 * @param {Array<String>} equipo 
 * @returns {Array<ImageData>} Devuelve la imagen
 */
const sacaImagenPokemon = (equipo) => {

    let arrSprites = [];

    for (let i = 0; i < equipo.length; i++) {
        arrSprites[i] = equipo[i].sprites.front_default;
    }
    
    return arrSprites;
}

/**
 * Podemos sacar los tipos con types array con el nombre de los tipos
 *@param {Array<Array>} equipo 
 */
const sacaTiposPokemon = (equipo) => {

    // let arrTipos = [];
    // let tiposParaArr = [];

    // for (let i = 0; i < equipo.length; i++) {
    //     for (let t = 0; t < equipo[i].types.length; t++) {
    //         tiposParaArr[t]
            
    //     }
    //     arrTipos[i]
    //     arrSprites[i] = equipo[i].sprites.front_default;
    // }
    
    // return arrSprites;

}


export const PokeApp = async() =>{
    /**
     * Evento que muestra el equipo sacado de la API
     */
    document.getElementById("randTeam").addEventListener("click", async() =>{
        let sacados = await SacaEquipoPokemonRandom();
        let datosPoke = await datosPokemon(sacados);
        let ImgsPoke = await sacaImagenPokemon(datosPoke);
        
        for (let i = 0; i < ImgsPoke.length; i++) {
            document.getElementById("Poke"+(++i)).innerHTML = "hola";
        }

    })
}
