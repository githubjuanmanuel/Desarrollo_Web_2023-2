class Animal{
    constructor(especie, color, sonido, habitat){
        this.especie = especie;
        this.color = color;
        this.sonido = sonido;
        this.habitat = habitat;
    }

    moverse(tipoMovimiento){
        console.log(`Mi movimiento es: ${tipoMovimiento}`);
    }
    sonidoCaracteristico(){
        console.log(this.sonido);
    }
}



class Perro extends Animal{
    constructor(raza,color,sonido){
        // this.raza = raza;
        // this.color = color;
        // this.sonido= sonido;
        super(raza, color, sonido,'casa')
    }

    ladrar() {
        return this.sonido;
    }

    sentarse(){
        console.log("Me he sentado");
    }
}

const Labrador = new Perro('labrador', 'dorado','woof');
// Labrador.sentarse();
// Labrador.sonidoCaracteristico()
// Labrador.moverse("Correr")

//---------------------------------------------------------

class Musica{
    constructor(info){
        this.fechaLanzamiento = info.fechaLanzamiento;
        this.artista = info.artista;
        this.genero = info.genero;
        this.nombre = info.nombre;
    }

    reproducir(){
        console.log(`Se esta reproduciento ${this.nombre} del artista ${this.artista}`);
    }

    pausar(){
        console.log(`Se ha pausado ${this.nombre} del artista ${this.artista}`);
    }
}

const cancion1 = new Musica({
    fechaLanzamiento: "01/06/2020",
    artista:"Marcos Witt",
    genero: "balada",
    nombre: "Dios de Pactos"
})

cancion1.reproducir();
cancion1.pausar();
