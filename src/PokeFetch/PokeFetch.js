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
const SacaEquipoPokemonRandom = async () => {

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
const datosPokemon = async (equipo) => {

    const datosPoke = await Promise.all(
        equipo.map(async(nombre) =>{
                const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + nombre);
                return await res.json();
        })
    );
    return datosPoke;
}

/**
 * 
 *  Array con las imagenes del pokemon
 * Podemos sacar sus sprites  o sus gifs
 * TODO: cuando no se tiene imagen en la api, devuelve null, añadir imagen desconocido
 * @param {Array<Object>} equipo 
 * @returns {Array<ImageData>} Devuelve la imagen
 */
const sacaImagenPokemon = (equipo) => {

    let arrSprites = [];

    for (let i = 0; i < equipo.length; i++) {
        if(equipo[i].sprites.front_default != null){
            arrSprites[i] = equipo[i].sprites.front_default;
        }else{
            arrSprites[i] = "/SinImgRedi.png";
        }
    }

    return arrSprites;
}

/**
 * Podemos sacar los tipos con types array con el nombre de los tipos
 * 
 * Recorreremos, primeros los json, luego los types y de cada type sacar name
 * 
 *@param {Array<Array>} equipo 
 */
const sacaTiposPokemon = (equipo) => {

    let arrTipos = [];
    let tiposParaArr = [];

    for (let i = 0; i < equipo.length; i++) {
        for (let t = 0; t < equipo[i].types.length; t++) {
            tiposParaArr[t] = equipo[i].types[t].type.name
        }
        arrTipos[i] = tiposParaArr;
        tiposParaArr = [];
        
    }
    return arrTipos;

}

const render = (nombre,Imagenes,tipos) =>{
    document.getElementById("MuestraPoke").style.display="block";
    for (let i = 0; i < Imagenes.length; i++) {
            let imgElement = document.getElementById("Poke" + (i + 1));
            if (imgElement) {
                imgElement.innerHTML = `<p class="letrasNombre">${nombre[i]}</p>`;
                imgElement.innerHTML += `<img src="${Imagenes[i]}" alt="pokemon ${i + 1}" /></br>`;
                for (let t = 0; t < tipos[i].length; t++) {
                    imgElement.innerHTML += `<p class="tipo ${tipos[i][t]}">${tipos[i][t]}</p>`;
                }
            }
        }

}

export const PokeApp = async () => {
    /**
     * Evento que muestra el equipo sacado de la API
     */
    document.getElementById("randTeam").addEventListener("click", async () => {
        let sacados = await SacaEquipoPokemonRandom();
        let datosPoke = await datosPokemon(sacados);
        let ImgsPoke = sacaImagenPokemon(datosPoke);
        let TiposPoke = sacaTiposPokemon(datosPoke);
        render(sacados,ImgsPoke,TiposPoke);
    })
}
