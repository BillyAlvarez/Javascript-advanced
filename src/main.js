import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {environmetnsComponents} from "./concepts/01-environments.js";
import {callbacksComponents} from "./concepts/02-callbacks.js";
import {promiseComponents} from "./concepts/03-promise.js";
import {promiseRaceComponents} from "./concepts/04-promise-race.js";

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`
const element = document.querySelector('.card')

//environmetnsComponents(element)
//callbacksComponents(element)
//promiseComponents(element)
promiseRaceComponents( element )
