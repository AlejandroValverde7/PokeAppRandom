import './style.css'
import PokeSinFondo from '/PokeSinFondo.png'
import {PokeApp} from './PokeFetch/PokeFetch.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a>
      <img src="${PokeSinFondo}"/>
    </a>
    <h1>Crea un equipo personalizado para combatir</h1>
    <div class="card">
          <table border="1" class="MuestraPoke">
        <tr>
          <th class="Poke1">Pk1</th>
          <th class="Poke2">Pk2</th>
          <th class="Poke3">Pk3</th>
        </tr>
        <tr>
          <th class="Poke4">Pk4</th>
          <th class="Poke5">Pk5</th>
          <th class="Poke6">Pk6</th>
        </tr>
      </table>
    
    <button id="randTeam" type="button">Dame un equipo</button>
    <img class="imagenPrueba">
  </div>
`
PokeApp();