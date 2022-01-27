class Animal {
    constructor(nombre, especie, patas, cola) {
        this.nombre = nombre;
        this.especie = especie;
        this.patas = patas;
        this.cola = cola;
    }

    getNombre() {
        return this.nombre;
    }

    getEspecie() {
        return this.especie;
    }

    getPatas() {
        return this.patas;
    }

    getCola() {
        // return this.cola;

        if (this.cola) {
            return "con";
        }

        return "sin";
    }
}

class Vaca extends Animal {
    constructor(Nombre, Especie, Patas, Cola, Leche) {
        super(Nombre, Especie, Patas, Cola);
        this.Leche = Leche;
    }


    getLeche() {
        return this.Leche;
    }

    SacarLeche(litros) {
        this.Leche = this.Leche - litros;
        return this.Leche;
    }
}



Gallo = new Animal('Paco', 'Pollo', '2', false);
document.write(Gallo.getNombre() + " es un " + Gallo.getEspecie() + " con " + Gallo.getPatas() + " patas y " + Gallo.getCola() + " cola<br>");

Vaca = new Vaca('Dorotea', 'Vaca', '4', true, 20);
document.write(Vaca.getNombre() + " es un " + Vaca.getEspecie() + " con " + Vaca.getPatas() + " patas y " + Vaca.getCola() + " cola que tiene " + Vaca.getLeche() + " litros de leche y le quedan " + Vaca.SacarLeche(3) + " Litros<br>");