import {heroes} from "../data/heroes.js";


export const callbacksComponents = ( element ) => {

    const id = '5d86371f233c9f2425f16916q'

    findHero( id, ( error, cualquierNombre ) => {

        if ( error ) {
            element.innerHTML = error;
            return;
        }

        element.innerHTML = cualquierNombre.name;

    })

}

const findHero = (id, callback) => {

    const hero = heroes.find( hero => hero.id === id);

    if ( !hero ) {
        callback( `Hero with id ${id} not found` );
        return;
    }
    callback( null, hero );
}
