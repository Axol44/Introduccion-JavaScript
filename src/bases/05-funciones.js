//Funciones js

/* const saludar = function( nombre ) {
  return `Hola ${nombre}`;
} */

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar2("sol"));
console.log(saludar3("lulú"));
console.log(saludar4());

// Arrow function que regresa un objeto  (sin return)
//Agregamos los parentesis para que se pueda regresar un objeto.
const getUser = () => ({
  uid: '34546',
  username: 'Juanchito'
});

const user = getUser();

console.log(user);

const getUsuarioActivo = ( nombre ) => (
   {  
    uid: '1234',
    username: nombre
  }
);

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);