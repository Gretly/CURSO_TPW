//PRIMERO
var work_team = [
    { id: 1, nombre: "Alejandro", cargo: "developer", correo: "alejandro@correo.com", sueldo: 3500 },
    { id: 2, nombre: "Cristian", cargo: "developer", correo: "cristian@correo.com", sueldo: 7800 },
    { id: 3, nombre: "Dorys", cargo: "ux designe", correo: "dorys@correo.com", sueldo: 6500 },
    { id: 4, nombre: "Andrés", cargo: "mangaer", correo: "andres@correo.com", sueldo: 6200 },
    { id: 5, nombre: "Daniela", cargo: "developer", correo: "daniela@correo.com", sueldo: 2100 }]
    
    
    //saber si existe algún usuario que se llame Andrés
    /*const resultado = usuarios.some((item) => {
    return item.nombre === "Andrés";
    })
    
    //resultado
    console.log(resultado) */
    
    var resultado = work_team.some(function(item){
        return item.nombre === "Daniela";
      })
      
      console.log(resultado);

//SEGUNDO

var desarrolladores = work_team.filter(function(team){
    return team.cargo === "developer"
})      
console.log(desarrolladores);
/*var objetosFiltrados = objetos.filter(function(objetos){
  return objetos.precio <=100
})

console.log(objetosFiltrados);*/