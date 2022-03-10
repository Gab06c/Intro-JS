// Valor divisible entre 2

var valor = Number(prompt("Ingresa un número cualquiera"))

if(valor % 2 === 0){
    console.log("El número" , (valor) , "es divisible entre 2");
    
}else{
    console.log("El número" , (numero) , "no es divisible entre 2");
}
VM3650:4 El número 6 es divisible entre 2

// Par o impar

var valor = Number(prompt("Ingresa un número cualquiera"))

if(valor % 2 === 1){
    alert("El número es impar");
}else{
    alert("El número es par");
}

// premio

var valor = Number(prompt("Ingresa un número"))

switch(valor){
    case 1000:
        console.log("FELICIDADES, GANASTE UN PREMIO");
        break;

    default:
        console.log("Lo siento, no ganaste nada, sigue participando");
}
VM3995:5 FELICIDADES, GANASTE UN PREMIO

//Numero Menor

var valor1 = Number(prompt("Ingresa un número"))
var valor2 = Number(prompt("Ingresa otro valor"))

switch(valor1, valor2){
    case valor1 > valor2:
    console.log("El número" , (valor2) , "es el menor");

    default:
    console.log("El número" , (valor1) , "es el menor");
}


// Numero mayor

var valorA = Number(prompt("Ingresa un número"))
var valorB = Number(prompt("Ingresa otro número"))
var valorC = Number(prompt("Ingresa un último número"))

if(valorA === valorB || valorA === valorC || valorB === valorC){
   alert("Ingresate dos números iguales, vuelve a intentar");
}

var valorA = Number(prompt("Ingresa un número"))
var valorB = Number(prompt("Ingresa otro número"))
var valorC = Number(prompt("Ingresa un último número"))

if(valorA > (valorB && valorC)){
    console.log("El número" , (valorA) , "es el mayor de todos");
    
}else if(valorB > (valorA && valorC)){
    console.log("El número" , (valorB) , "es el mayor de todos");
    
}else if(valorC > (valorA && valorB)){
    console.log("El número" , (valorC) , "es el mayor de todos");
}

