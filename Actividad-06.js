//concatenar 
var animals = ["eagle","parrot","monkey","boar","lion"]
var comingSoonAnimals = ["panter","dragon","turtle"]

animals.concat(comingSoonAnimals);
(8) ['eagle', 'parrot', 'monkey', 'boar', 'lion', 'panter', 'dragon', 'turtle']

// agregar cow
var animals = ["eagle","parrot","monkey","boar","lion"]

animals.push("cow");
console.log(animals)
VM392:4 (6) ['eagle', 'parrot', 'monkey', 'boar', 'lion', 'cow']

// quitar eagle
var animals = ["eagle","parrot","monkey","boar","lion"]

animals.shift();

console.log(animals);
VM509:5 (4) ['parrot', 'monkey', 'boar', 'lion']

// ordenar numeros
var arr = ["4","6","1","0","8","2"]
arr.sort();
console.log(arr);
VM625:3 (6) ['0', '1', '2', '4', '6', '8']