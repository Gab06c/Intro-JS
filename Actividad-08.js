// actividad 1

function search (sentence1, sentence2){
    if(sentence1.includes(sentence2)){
        return true
    } else {
        return false
    }
}

console.log(search("cats are the best", "cats"))

// actividad 2

function sumaArreglo (arreglo) {

    let suma = 0;

    for(var index = 0; index < arreglo.length; index++){
         suma += arreglo[index];
     }
     
    return suma 
}

console.log(sumaArreglo([1, 2, 3, 4, 10, 11]))


// palíndromo 

var word1 = ("madam")
var word2 = ("computadora")

function palindromo (word) {
    
    let array = word.split ('')

    for(var i = 0; i < array.length; i++){
        if (array[i] === array[array.length -(i+1)]){
            return "Tu palabra es un palíndromo" 
        } else {
            return "Tu palabra no es un palíndromo"
        }    
    }
}

console.log(palindromo(word1))
console.log(palindromo(word2))

//grados con switch

function temperatura (numero, unidad) {
    switch (unidad) {
        case "celsius":
            conversión = numero * 1.8 + 32
            console.log("La conversión de" , (numero) , "grados Celsius a Farenheit son" , (conversión) , "dado que multiplicamos" , (numero) , "por 1.8 y sumamos 32");
        break;
        

        case "farenheit":
            conversión2 = numero - 32 % 1.8
            console.log( "La conversión de" , (numero) , "grados Farenheit a Celsius son" , (conversión2) , "dado que sumamos" , (numero) , "32 y dividimos entre 1.8");
        break;

        default:
            console.log("No se puede hacer convsersión de grados Kelvin");
        break;        
    }
}

temperatura (50, "celsius")
temperatura (100, "farenheit")
temperatura (75, "kelvin")

// grados con if

const temp1 = "celsius"
const temp2 = "farenheit"

function temperatura (numero, unidad) {

if (temp1 == unidad){
    conversión = numero * 1.8 + 32
    console.log("La conversión de" , (numero) , "grados Celsius a Farenheit son" , (conversión) , "dado que multiplicamos" , (numero) , "por 1.8 y sumamos 32");
} else if (temp2 == unidad){
        conversión2 = numero - 32 % 1.8
        console.log( "La conversión de" , (numero) , "grados Farenheit a Celsius son" , (conversión2) , "dado que sumamos" , (numero) , "32 y dividimos entre 1.8");
} else {
        console.log("No se puede hacer convsersión de grados Kelvin");
}
}
    
temperatura (50, "celsius")
temperatura (100, "farenheit")
temperatura (75, "kelvin")