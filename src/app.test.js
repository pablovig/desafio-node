const app = require("./index");
const supertest = require("supertest");
const repositorio = require("./repository")
var service = require('./service') 

describe("Testeo de Endpoints: ", () => {
    test("Al realizar un GET a /buscaminas/ Se crea una nueva partida", async () =>  {
        await supertest(app)
        .get("/buscaminas/")
        .expect(200)
        .then((respuesta) => {
          expect(respuesta.body.message).toBe("Se comienza nueva partida");
        });
    })

    test("Al realizar un GET a /buscaminas/1 me devuelve mensaje afirmativo", async () =>  {

        repositorio.crearPartida()

        await supertest(app)
        .get("/buscaminas/1")
        .expect(200)
        .then((respuesta) => {
          expect(respuesta.body.message).toBe("Partida numero 1");
        });
    })

    test("Al realizar un POST a /buscaminas/guardar me devuelve mensaje de guardado exitoso", async () =>  {

        const tableroPrueba = [
            [ 1,1,1,0,0 ],
            [ 0,1,1,0,0 ],
            [ 1,0,0,0,0 ],
            [ 1,0,0,0,0 ],
            [ 0,0,0,1,0 ]
        ]

        await supertest(app)
        .post("/buscaminas/guardar")
        .send(tableroPrueba)
        .expect(200)
        .then((respuesta) => {
          expect(respuesta.body.message).toBe("Partida guardada exitosamente");
        });
    })
})
