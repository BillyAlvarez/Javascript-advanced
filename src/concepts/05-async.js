import {heroes} from "../data/heroes.js";


export const asyncComponents = ( element ) => {

const id1 = '5d86371f25a058e5b1c8a65e'
    console.log('Inicio de componente')
    findHero(id1).then( name => element.innerHTML = name)
        .catch((error) => element.innerText = error);
    console.log('Fin de componente')
}

const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id);
    if (!hero) {
        throw new Error(`No hero found with id ${id}`);
    }

    return hero.name;
}
