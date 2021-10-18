const Buscaminas = require("./model")

//Se crea un Repositorio manual
var repositorio = []
var posicion = 0
var nuevaPartida = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

exports.findById = (id) => {
    // const resultado = repositorio.find(buscaminas => buscaminas.id == id)
    // console.log(resultado)
    // return resultado? resultado.tablero : "No Existe"
    return repositorio.find(buscaminas => buscaminas.id == id)
}

exports.guardarPartida = (tablero) => {
    posicion = ++posicion
    const buscaminas = new Buscaminas(posicion,tablero)
    repositorio.push(buscaminas)

    return buscaminas
}

exports.crearPartida = () => {
    return this.guardarPartida(nuevaPartida).tablero
}

