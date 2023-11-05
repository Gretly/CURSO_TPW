const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const btn = document.querySelector('#btncalcular');
const resultado = document.querySelector('#resultado');

function btnOnClick(){
    const sumaElementos = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = "El resultado es: " + sumaElementos;
}

console.log(input1+input2);
//CREAR UNA CALCULADORA DE INDICE DE MASA CORPORAL













/*
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.tema');
const parrafo1 = document.getElementById('tpw');
const input = document.querySelector('input');

console.log(input.value);

console.log({h1, p, parrafo, parrafo1, input});


h1.innerHTML = 'PROMOCION <br> 2023';
//h1.innerText = 'PROMOCION <br> 2023';
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
//h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "123"

const img = document.createElement('img');
img.setAttribute('src', 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D');
console.log(img);

//pid.innerHTML = "mi promocion";
parrafo1.append(img);*/