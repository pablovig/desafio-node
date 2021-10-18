const repositorio = require("./repository")

exports.getBuscaminasId = (req,res) => {
    const buscaminasId = req.params.id
    const partida = repositorio.findById(buscaminasId)
    // return res.status(200).json({message: 'Return getBuscaminas, id ' + buscaminasId} )
    return partida? res.status(200).json(
            {
                message: 'Partida numero ' + buscaminasId,
                buscaminas: partida
            }
        ) 
    :
        res.status(200).json(
            {
                message: 'No existe partida'
            }
        )
}

exports.getBuscaminas = (req,res) => {
    const partida = repositorio.crearPartida()
    return res.status(200).json(
        {
            message: 'Se comienza nueva partida',
            buscaminas: partida
        }
    )
}

exports.postBuscaminas = (req, res) => {
    const buscaminasBody = req.body
    console.log(req.body)
    const partida = repositorio.guardarPartida(buscaminasBody)
    return res.status(200).json(
        {
            message: 'Partida guardada exitosamente',
            buscaminas: partida
        }
    )
}

