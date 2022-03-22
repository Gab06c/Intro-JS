/**
 * Find the difference in age between the oldest and youngest family members, 
 * and return their respective ages and the age difference.
 * 
 */

 const family = [
  {
    name: 'John',
    age: 13
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  }
];

var familyAges = family.map(element => element.age);
var familyAges1 = familyAges.sort((a, b) => (a-b));

function agesDifferences(minorAge, mayorAge){
  resta = mayorAge - minorAge;
  return resta

}

agesDifferences(familyAges1[0],familyAges1[familyAges1.length - 1])
console.log('La edad menor es', familyAges[0], 'mientras que la mayor es', familyAges[familyAges1.length - 1], 'y la diferencia entre ambas es de', (resta))



/**
 * If the given input is an array of numbers, return the sum of all the positives ones. 
 * If the array is empty or there aren't any positive numbers, return 0.
 */

 var suma = 0
const numbers = [ 1, -4, 12, 0, -3, 29, -150];

numbers.forEach(function(i){
    if(i > 0){
        suma += i
    }
});

console.log(suma)


 /**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundonúmeros más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */

  const arr = [3,4,6,1,5,2,9,10,23,12]
  let arrOrdenado = arr.sort((a, b) => (a-b));
  console.log('El segundo valor mas bajo es', (arrOrdenado[1]), ', mientras el segundo valor mas alto es', (arrOrdenado[arrOrdenado.length - 2]))