//LOOPS O CICLOS
//GENERAR UN ARRAY CON LOS NOMBRES DE SUS COMPAÑEROS
//CREAR UNA FUNCION QUE IMPRIMA EL SALUDO A CADA UNO DE SUS COMPAÑEROS
var estudiantes = ["Liseth", "Alex", "Luz", "Rudy", "Yoselin", "Christian"];
function saludarEstudiantes(estudiante){
    console.log(`Buen dia, ${estudiante}`);
}

for (var i=0; i < estudiantes.length; i++ ){
    saludarEstudiantes(estudiantes[i]);
}

/*for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}*/

//CON WHILE
/*var estudiantes = ["Liseth", "Alex", "Luz", "Rudy", "Yoselin", "Christian"];
function saludarEstudiantes(estudiante){
    console.log(`Buen dia, ${estudiante}`);
}
while(estudiantes.length > 0){
    //console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}*/