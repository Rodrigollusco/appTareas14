const miFuncion = (param1, param2, ...otrosParametros) => {
  return otrosParametros;
};

//console.log(miFuncion("a", "b", "c", "d", "e"));

const sumar = (numeros) => {
  return numeros.reduce((acum, numero) => {
    return acum + numero;
  });
};

const promedio = (...numeros) => {
  let resultado = sumar(numeros);
  return resultado / numeros.length;
};

console.log(promedio(8, 9, 8.5, 7, 6));
