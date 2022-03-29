import heroes, { owners } from '../data/heroes'

console.log(owners);

const getHeroeId = (id) => {
  return heroes.find(x => x.id === id)
}

console.log(getHeroeId(1));
//const getHeroeId2 = (id) => heroes.find((x) => x.id === id);

const getHeroeByOwner = (owner) => heroes.filter(x => x.owner === owner);
console.log(getHeroeByOwner('DC'));