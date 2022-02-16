let frutosRojos = ["frutillas", "arandanos", "cerezas"];
let frutosCitricos = ["pomelos", "naranjas", "mandarinas"];

let ensaladaDePrueba = [frutosRojos, frutosCitricos];

let ensaladaUno = [];

frutosRojos.forEach((fruta) => ensaladaUno.push(fruta));

frutosCitricos.forEach((fruta) => ensaladaUno.push(fruta));

//console.log(ensaladaUno);

let ensaladaDos = [...frutosRojos, ...frutosCitricos];

//console.log(ensaladaDePrueba);

/* ************************************************** */

const comision14 = {
    nombreComision : "Comision 14",
    turno : "mañana",
    horario : "9 - 11 hs",
    profesores : ["Cristian", "Eric"]
}
const comision13 = {
    nombreComision : "Comision 13",
    turno : "noche",
    horario : "19 - 21 hs",
    profesores : ["Jonatan", "Matias"]
}

let alumno = {
    nombre : "Alfredo",
    apellido : "Mendez"
    ...comision13
}

let alumna = {
    nombre : "Luisa",
    apellido : "Carcamo"
    ...comision14
}

console.log(alumno)