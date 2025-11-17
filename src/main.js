import './style.css'
import PokeSinFondo from '../public/PokeSinFondo.png'
import {PokeApp} from './PokeFetch/PokeFetch.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a>
      <img src="${PokeSinFondo}"/>
    </a>
    <h1>Crea un equipo personalizado para combatir</h1>
    <div class="card">
      <button id="randTeam" type="button">Dame un equipo</button>
    </div>
      <div class="MuestraPoke">
      <div class="Poke1">1</div>
      <div class="Poke2">2</div>
      <div class="Poke3">3</div>
      <div class="Poke4">4</div>
      <div class="Poke5">5</div>
      <div class="Poke6">6</div>
  </div>
  </div>
`
PokeApp();