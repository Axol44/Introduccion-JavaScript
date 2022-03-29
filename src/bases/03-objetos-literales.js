const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 555545355,
    lat: 14.5434,
    lng: 34.2344, 
  }
};

//console.table( persona );
const persona2 = {...persona};
persona2.nombre = 'peter'

console.log(persona);
console.log(persona2);