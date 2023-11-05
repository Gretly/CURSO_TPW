<script> 
var precio=350;
var iva = 21;
var precioTotal = precio + precio*21/100
console.log("El precio total es: "+precioTotal);
</script>

<script> 
let lado = 40;
let area = 40*40;
let perimetro = 40*4;
console.log("El area es "+ area);
console.log("El perímetro es "+perimetro);
</script>

let nombre = prompt("escribe tu nombre");
let saludo = "Hola "+nombre;
console.log(saludo);

var num1 = parseInt(prompt("Teclea un numero entero");
var num2 = parseInt(prompt("Teclea un numero entero");
var num3 = parseInt(prompt("Teclea un numero entero");
var media = (var1 + var2 + var3)/3;
alert("La media de los números es "+media);

let horas = 2;
let min = 30;
let segundos;
//las horas a segundos
segundos = 2*60*60;
//ahora sumo los minutos en segundos
segundos += 30*60;
console.log("segundos "+segundos);

var comensales, papas, huevos, cebollas;
comensales = parseInt(prompt("Comensales"));
papas = comensales*200;
papas = papas/1000;    //en kilos
huevos = papas*5;
cebolla = papas*300;
console.log("Patatas " + papas+" kilos");
console.log("Huevos " + huevos);
console.log("Cebolla "+cebolla +" gramos");

var varUno = 10;
var varDos = 30;
console.log("varUno es " +varUno);   // 10
console.log("varDos es " +varDos);   // 30
var aux;
aux=varUno;
varUno = varDos;
varDos = aux;
console.log("varUno es " +varUno);    // 30
console.log("varDos es " +varDos);    // 10