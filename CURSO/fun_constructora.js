/*function carro(marca, modelo, annio, color){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.color = color;
}

var carronuevo = new carro("tesla", "model 2", 2022, "negro");
console.log(carronuevo);
var carronuevo = new carro("teslita", "model 222", 2023, "gris");
console.log(carronuevo);*/

//GENERAR UNA FUCNION CONSTRUCTORA Y HACER UN LOOPS PARA GENERAR 
//UNA LISTA DE 20 CARROS QUE SE VAYAN CONSTRUYENDO SOLOS
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 4 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }