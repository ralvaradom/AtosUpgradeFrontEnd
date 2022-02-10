import { heroes } from "../data/heroes";

const getHeroesByName = (name='') => {

	console.log('se llamo la funcion')

	if(name==='')
		return [];

	name = name.toLowerCase();
	return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
}

export default getHeroesByName;