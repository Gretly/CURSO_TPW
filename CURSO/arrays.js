//ARRAY, es un tipo de dato estructurado que permite almacenar un conjunto de datos homogeneo, 
//es decir, todos ellos del mismo tipo y relacionados
var frutas = ["fresa", "pera", "mango", "uva"];
//frutas[2] = "uva";
//frutas[3] = "mango";
frutas.splice(1, 0, "Roberto", "Amaya");
console.log(frutas);



//cantidad de elementos
//console.log(frutas.length);

//indice de los elemntos
//console.log(frutas[2]);

//metodos: mutar elementos
//metodo ingreso de elemento en ultima posicion
/*var masfrutas = frutas.push("manzana");
console.log(frutas);

//metodos sacar elemento ingresado en ultima posicion
var menosfruta = frutas.pop("manzana");
console.log(frutas);

//metodos inicio del array
var nuevoingreso = frutas.unshift("cereza");
console.log(frutas);

//metodo borrar inicio
var menosingreso = frutas.shift("cereza");
console.log(frutas);

//metodo busca posicion
var posicion = frutas.indexOf("pera");
console.log(posicion);*/