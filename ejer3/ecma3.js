class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    deposito(cantidad) {
        this.saldo = this.saldo + cantidad;
    }

    extraer(cantidad) {
        this.saldo = this.saldo - cantidad;
    }
}