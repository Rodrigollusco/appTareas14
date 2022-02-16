let fraseInicial = "Playground es excelente";
let aReemplazar = "excelente";
let reemplazo = "horrible";
function reemplazoFastFast(fraseInicial, aReemplazar, reemplazo) {
  let fraseFinal = fraseInicial.replace(aReemplazar, reemplazo);
  return fraseFinal;
}
console.log(reemplazoFastFast(fraseInicial, aReemplazar, reemplazo));
