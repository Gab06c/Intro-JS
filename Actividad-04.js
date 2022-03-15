<<<<<<< HEAD
// "while" para múltiplos de 5

var numeroBase = Number(prompt("Ingresa un número mayor a 5"))
var contador = 1

while(contador <= numeroBase){
    if(contador % 5 === 0) console.log(contador);
    contador ++;
}

// "Do while" para múltiplos de 5

var numeroBase = Number(prompt("Ingresa un número mayor a 5"))
var contador = 1

do{
    if(contador % 5 === 0) console.log(contador);
    contador ++;
}while(contador <= numeroBase);

// "for" para impares del 1 al 50

for(var i=1; i <= 50; i++){
    if(i % 2 === 1) console.log((i))
=======
// "while" para múltiplos de 5

var numeroBase = Number(prompt("Ingresa un número mayor a 5"))
var contador = 1

while(contador <= numeroBase){
    if(contador % 5 === 0) console.log(contador);
    contador ++;
}

// "Do while" para múltiplos de 5

var numeroBase = Number(prompt("Ingresa un número mayor a 5"))
var contador = 1

do{
    if(contador % 5 === 0) console.log(contador);
    contador ++;
}while(contador <= numeroBase);

// "for" para impares del 1 al 50

for(var i=1; i <= 50; i++){
    if(i % 2 === 1) console.log((i))
>>>>>>> 6bd8e13296d5404f13cdb3d7f0901a60d3bd787f
}