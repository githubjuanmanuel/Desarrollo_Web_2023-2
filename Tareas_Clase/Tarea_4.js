//Crear una clase padre, crear una clase que herede de la clase padre
//Ambas clases deben tener minimo dos metodos, recibir objetos,
//Los objetos deben tener otro objeto como propiedad

class Vehiculo{
    constructor(info){
        this.modelo = info.Modelo;
        this.anio = info.Anio;
        this.marca = info.Marca;
        this.color = info.Descripcion.Color;
        this.motor = info.Descripcion.Motor
        this.estado = info.Descripcion.Estado;
    }

    MostrarCaracteristicas(){
        console.log(`
        Modelo: ${this.modelo}
        AÑO: ${this.anio}
        Marca: ${this.marca} 
        Color: ${this.color}
        Motor: ${this.motor}
        Estado: ${this.estado}
        `)
    }

    cambiarColor(nuevoColor){
        this.color = nuevoColor;
    }
}

class Automovil extends Vehiculo{
    constructor(info){
        super(info)
    }

    Coducir(){
        console.log(`Estas conduciendo tu ${this.marca} ${this.modelo}`);
    }

    Detenerse(){
        console.log(`Detuviste tu ${this.marca} ${this.modelo}`)
    }
}



const Auto_1 = new Automovil({
    Modelo: "CX-50",
    Anio: 2023,
    Marca: "Mazda",
    Descripcion:{
        Color: "Negro",
        Motor: "Hibrido",
        Estado: "Nuevo"
    }
})
const Auto_2 = new Automovil({
    Modelo: "Logan",
    Anio: 2020,
    Marca: "Renault",
    Descripcion:{
        Color: "Gris",
        Motor: "De combustion",
        Estado: "Usado"
    }
})

Auto_1.cambiarColor("Azul");
Auto_1.MostrarCaracteristicas();

Auto_2.Coducir();
Auto_2.Detenerse();