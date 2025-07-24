import {heroes} from "../data/heroes.js";


export const promiseComponents = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        <h1> ${hero1.name}</h1>
        <h1> ${hero2.name}</h1>
        `
    }

    const renderError = (error) => {
        element.innerHTML = `
        <h1> ${error}</h1>
        `
    }

    const id1 = "5d86371f2343e37870b91ef1"
    const id2 = "5d86371f9f80b591f499df32"


    Promise.all([
        findHero(id1),
        findHero(id2),
    ]).then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
        .catch(renderError)


    //! Forma 2
    // let hero1;
    // findHero(id1)
    //     .then(hero => {
    //         hero1 = hero
    //         return findHero(id2);
    //     }).then(hero2 => {
    //     renderTwoHeroes(hero1, hero2)
    // }).catch(renderError);

    //!  Forma 1
    // findHero(id1)
    //     .then((hero1) => {
    //         findHero(id2).then((hero2) => {
    //             renderTwoHeroes(hero1, hero2)
    //         }).catch((renderError));
    //
    //     })
    //     .catch(renderError)

}


const findHero = (id) => {

    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }
        resolve(`Hero with id ${id} not found!`);

    })
}