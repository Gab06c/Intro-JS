<<<<<<< HEAD
// "while" para múltiplos de 5

var numeroBase = Number(prompt("Ingresa un número mayor a 5"))
var contador = 1

while(contador <= numeroBase){
    if(contador % 5 === 0) console.log(contador);
    contador ++;
}
VM62:5 5
VM62:5 10
VM62:5 15
VM62:5 20
VM62:5 25
VM62:5 30
VM62:5 35

// "Do while" para múltiplos de 5

var numeroBase = Number(prompt("Ingresa un número mayor a 5"))
var contador = 1

do{
    if(contador % 5 === 0) console.log(contador);
    contador ++;
}while(contador <= numeroBase)
VM202:5 5
VM202:5 10
VM202:5 15
VM202:5 20
VM202:5 25
VM202:5 30
VM202:5 35
VM202:5 40



// "for" para impares del 1 al 50

for(var i=1; i <= 50; i++){
    if(i % 2 === 1) console.log((i))
}
VM224:2 1
VM224:2 3
VM224:2 5
VM224:2 7
VM224:2 9
VM224:2 11
VM224:2 13
VM224:2 15
VM224:2 17
VM224:2 19
VM224:2 21
VM224:2 23
VM224:2 25
VM224:2 27
VM224:2 29
VM224:2 31
VM224:2 33
VM224:2 35
VM224:2 37
VM224:2 39
VM224:2 41
VM224:2 43
VM224:2 45
VM224:2 47
VM224:2 49