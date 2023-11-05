//METODOS PARA EL RECORRIDO DE ARRAYS

var objetos = [
    { nombre: "Bici", precio: 3000 },
    { nombre: "TV", precio: 2500 },
    { nombre: "Libro", precio: 320 },
    { nombre: "Celular",  precio: 10000 },
    { nombre: "Laptop", precio: 20000 },
    { nombre: "Teclado", precio: 500 },
    { nombre: "Audifonos", precio: 200 },
  ]
  //METODO FILTER: 
/*var objetosFiltrados = objetos.filter(function(objetos){
  return objetos.precio <=100
})

console.log(objetosFiltrados);*/

//METODO MAP: 
/*var nombreObjetos = objetos.map(function(objeto){
  return objeto.precio
})
console.log(nombreObjetos);*/

//METODO FIND
/*var encuentraObjeto = objetos.find(function(objeto){
  return objeto.nombre === "Pantalla"
})

console.log(encuentraObjeto);*/

//METODO FOREACH:
/*objetos.forEach(function(objeto){
  console.log(objeto.precio);
})*/

//METODO SOME: 
var existeObjeto = objetos.some(function(objeto){
  return objeto.precio <=150
})

console.log(existeObjeto);
