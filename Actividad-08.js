function sumaArreglo () {

    let suma = 0;

     for (i = 0, i < arreglo.length, i++) {
         suma += arreglo[i];
     }
     
    return suma 
}

sumaArreglo (const arreglo = [1, 2, 3, 4, 10, 11] )
console.log(sumaArreglo)