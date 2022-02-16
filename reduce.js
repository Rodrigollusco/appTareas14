/* 
array.reduce(function(aumulador, element){
    //ejecuta el cuerpo del callback
})
*/

const numeros = [2, 4, 6, 8];

let sumaTotal = numeros.reduce((acum, numero) => {
  //console.log(acum, numero);
  return acum + numero;
});

//console.log(sumaTotal);

const nombres = [
  "Jose",
  "Maria",
  "Alberto",
  "Maria",
  "Ignacio",
  "Jose",
  "Alfredo",
  "Maria",
];

let cantidadNombres = nombres.reduce((contador, nombre) => {
  contador[nombre] = (contador[nombre] || 0) + 1;
  console.log(nombre, contador[nombre]);
  return contador;
}, {});

console.log(`Hay ${cantidadNombres.Jose} Jose`);
console.log(`Hay ${cantidadNombres.Maria} Maria`);
