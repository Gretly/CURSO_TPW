//un objeto es un entidad independiente con propiedades y tipos
var micarro = {
    marca:"nissan",
    modelo: "corola",
    annio: 2023,
    detalledecarro: function(){
        console.log(`Mi Auto es ${this.modelo} ${this.annio}`);
    }
};

//console.log(micarro);
//console.log(micarro.marca);

micarro.detalledecarro();