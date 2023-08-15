//Construir un array con minimo 2 objetos
//Cada objeto debe tener un objeto
//Usar minimo 3 metodos de arreglos sobre el array

const Peliculas = [
    {nombre: 'Jurassic World', vista: true, caracteristicas:{
        tipoPeli: 'Accion', genero: 'ficcion'
    }},
    {nombre: 'Guerra Mundial Z', vista: false, caracteristicas:{
        tipoPeli: 'Accion', genero: 'pos apocalitico'
    }}
]

//Filtrar por peliculas vistas

const pelisVistas = Peliculas.filter(pelicula => pelicula.vista === true)
console.log(pelisVistas);

//Ver si todas las peliculas son de tipo accion

const accionMovies = Peliculas.every(peli => peli.caracteristicas.tipoPeli === "Accion")
console.log(accionMovies);

//Cambiar el genero de jurassic world

Peliculas.forEach((peli) => {
    if (peli.nombre === "Jurassic World") {
        peli.caracteristicas.genero = "Ciencia ficcion"
    }
})
console.log(Peliculas);
