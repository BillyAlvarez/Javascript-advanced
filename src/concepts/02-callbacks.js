import {heroes} from "../data/heroes.js";


export const callbacksComponents = (element) => {

    const id = '5d86371f233c9f2425f16916'
    const id2 = '5d86371fd55e2e2a30fe1cc4'

    findHero(id, (error, hero1) => {


        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {


            if (error) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero1.name} /  ${hero2.name}`;
        });
    });
}

const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return;
    }
    callback(null, hero);
}
