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
          <table id="MuestraPoke">
        <tr>
          <th id="Poke1"></th>
          <th id="Poke2"></th>
          <th id="Poke3"></th>
        </tr>
        <tr>
          <th id="Poke4"></th>
          <th id="Poke5"></th>
          <th id="Poke6"></th>
        </tr>
      </table>
    </div>  
    <button id="randTeam" type="button">Dame un equipo</button>
  
`
PokeApp();