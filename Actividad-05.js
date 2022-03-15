var arrayNumbers = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for(var index = 0; index < arrayNumbers.length; index++){
    if(arreglo[index] >= 3) {
        console.log(arrayNumbers[index])
    }
}

VM1897:5 4
VM1897:5 6
VM1897:5 10
VM1897:5 22
VM1897:5 55
VM1897:5 46
VM1897:5 5

// arreglo vacio y asignación de valores 

var array = []
var index = 0

while (index < 5) {
    index++
    array[index] = index
}
console.log(array)
VM2242:8 (6) [empty, 1, 2, 3, 4, 5]