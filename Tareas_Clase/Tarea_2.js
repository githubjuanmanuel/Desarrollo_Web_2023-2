//Crear dos funciones tipo flecha, una de ellas debe manipular arreglos
//es decir pop() o push(). La segunda debe tomar 2 parametros de entrada y
//no usar return para regresar el resultado.
//Crear una tercera que sea una callback function, mostrar el resultado de
//la callback usando las dos funciones anteriores

const arreglo = [1,2,3,4,5,6,7,8,9,10];



const funcion_1 = (arreglo) => {
    let suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    arreglo.push(suma);
    let array_lenght = arreglo.length;
    return array_lenght;
}

const funcion_2 = (num1,num2) => num1*num2;

const callback = (num, funcion) => {
    let resultado1 = funcion_1(arreglo)
    return funcion(num,resultado1)
}

console.log(callback(3,funcion_2))

