//Crear un archivo de JavaScript que contenga lo siguiente:
/*         Declaración de variables usando las palabras clave const y let.
            Leer los condicionales que existen en JavaScript del link entregado, 
            y de cada uno realizar un ejemplo, distinto al de la página, usando los condicionales en JavaScript. */

const array = [1,2,3,4,5,6,7,8,9,11,12];

const Condicionales = (num1,num2) => {
    let suma = 0, resta = 0, multiplicacion = 0, division = 0;

    if (array.includes(num1) && array.includes(num2)) {
        console.log("Los números existen en el array");
    } else if (array.includes(num1) && !array.includes(num2)) {
        num2 = 2;
    } else if (array.includes(num2) && !array.includes(num1)) {
        num1 = 2;
    } else{
        num1 = 1;
        num2 = 2;
    }

    suma = num1 + num2;
    resta = array[num1] - num2;
    multiplicacion = array[num2] * num1;
    division = num1 / num2;
    
    console.log(`
        Suma = ${suma}
        Resta = ${resta}
        Multiplicación = ${multiplicacion}
        División = ${division}
        `)

}

Condicionales(0,13);
//------------------------------------------------------------------------------

const mis_peliculas = [
    {
        opcion : "A",
        titulo: "El señor de los anillo",
        vista: true
    },{
        opcion : "B",
        titulo: "La liga de las justicia",
        vista: false
    },{
        opcion : "C",
        titulo: "Los vengadores",
        vista: true
    },{
        opcion : "D",
        titulo: "Batman vs Superman",
        vista: false
    }
]

function Peliculas( ) {
    for (const pelicula of mis_peliculas) {
        if (pelicula.vista) {
            console.log(`Ya has visto: ${pelicula.titulo} \n`)
        }else{
            console.log(`Te falta por ver: ${pelicula.titulo} \n`)
        }
    }
}

Peliculas();

//----------------------------------------------------------------

const num_Base = 5;
let factorial = 1;

for (let i = 1; i <= num_Base; i++) {
    factorial *= i
}

console.log(`El factorial de ${num_Base} es: ${factorial}\n`);

//-----------------------------------------------------------------

function while_switch(num1, num2, num3) {
    switch (num1) {
        case 1:
            while (num3 < (num2*4)) {
                num3++;
            }
            console.log(num3)
            break;
        case 2:
            do {
                
            } while (num2 < (num3*3));
            break;
        default:
            break;
    }
}
while_switch(1,5,6);


    