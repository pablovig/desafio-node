//Se crea Clase en ES5
function Buscaminas(id,tablero) {
    this.id = id,
    this.tablero = tablero;
}

Buscaminas.prototype.getId = () => { return this.id }

Buscaminas.prototype.getTablero = () => { return this.tablero }

module.exports = Buscaminas
