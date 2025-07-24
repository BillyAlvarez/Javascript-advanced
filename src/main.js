import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {environmetnsComponents} from "./concepts/01-environments.js";
import {callbacksComponents} from "./concepts/02-callbacks.js";
import {promiseComponents} from "./concepts/03-promise.js";
import {promiseRaceComponents} from "./concepts/04-promise-race.js";
import {asyncComponents} from "./concepts/05-async.js";
import {asyncAwaitComponents} from "./concepts/06-async-await.js";
import {asyncAwait2Components} from "./concepts/07-async-await.js";
import {forAwaitComponent} from "./concepts/08-for-await.js";
import {generatorComponents} from "./concepts/09-generators.js";
import {generatorAsyncComponents} from "./concepts/10-generators-async.js";

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
//promiseRaceComponents( element )
//asyncComponents( element );
//asyncAwaitComponents( element );
//asyncAwait2Components( element);
//forAwaitComponent( element );
//generatorComponents( element);
generatorAsyncComponents(element)

