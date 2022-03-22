// Ejercicios de Objetos y sus métodos básicos:
     
    // 1. Muestra en pantalla el valor de la propiedad name mediante dot notation

    var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

console.log(student.name)

    // 2. Muestra en pantalla el valor de la propiedad age mediante bracket notation

    var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

console.log(student['age'])

    // 3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
    var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

student.name = 'Steve Jobs'

 //* Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student))


//Verifica si la propiedad name se encuentra dentro del siguiente objeto:
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student.hasOwnProperty('name'))

    /* * Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar: */

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


    if(student.hasOwnProperty('rollno')){
        delete student.rollno;
    } else {
        console.log("El objeto no tiene la propiedad seleccionada")
    }

console.log(student)


//Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

if(student.age !== 35){
    student.age = 35
    console.log(student)
} else {
    console.log("La propiedad edad ya tiene el valor 35")
}


 //* Escriba un programa para añadir una nueva propiedad al siguiente objeto:

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

student.pet = ['cat', 'dog']
console.log(student)





 //* Crea un código para llenar un objecto vacio:

const objeto = {}

Object.defineProperties(objeto, {
    color: {
        enumerable: true, 
        value: "rojo",
        writable: true,
    },
    tamaño: {
        value: "pequeño",
        enumerable: true, 
        writable: true,
    },
    peso: {
        value: 100,
        enumerable: true, 
        writable: true,
    },
    cantidad: {
        value: 5,
        enumerable: true, 
        writable: true,
    },
})

console.log(objeto)


/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};



function newValue(word){

    if(student.hasOwnProperty(word)) {
        return 'true'
    } else {
        return "false"
    }
}

console.log(newValue('job'))
console.log(newValue('palabra'))



/* Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
} */

var myContainer = {

    myFunction: 
        function container(){
        this.color = 'rojo', 
        this.size = 'pequeño', 
        this.quantity = 100 
        },
}

var myContainer = new container();
console.log(myContainer)


/*var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];
Hacer una función para que reciba ese arreglo de objetos
y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
// al String "name" para que devuelva algo así:
//     ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]*/


var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];

function sumaObjecto(value1, value2, value3, value4, value5, value6){
    total = value1 + value2;
    total1 = value3 + value4;
    total2 = value5 + value6;

    return total,  total1, total2

}

sumaObjecto(simpleExercise[0].a, simpleExercise[0].b, simpleExercise[1].a, simpleExercise[1].b, simpleExercise[2].a, simpleExercise[2].b,)

console.log((total), (simpleExercise[0].name), '-=-', (total1), (simpleExercise[1].name), '-=-', (total2), (simpleExercise[2].name))