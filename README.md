
Desafío Mini Api en Node.js

## Bibliotecas utilizadas y versión de Node.js:
* Express
* Nodemon
* Morgan
* Jest
* Supertest
* Node 14.17.1

## Levantar Server

Para poder correr nuestro servidor de Node.js se debe correr el comando:
$ npm run server

El servidaor ahora está corriendo en el puerto 8080.
Podemos realizar nuestras peticiones, por ejemplo, desde Postman:

#### **GET localhost:8080/buscaminas/**

Creará una nueva partida de buscaminas con la siguiente forma:
[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

#### **GET localhost:8080/buscaminas/{id}**

De existir alguna devolverá una partida con el id ingresado, de lo contrario devuelve el string "No existe partida".

#### **POST localhost:8080/buscaminas/guardar**

Se deberá ingresar por *BODY* una partida de buscaminas de la forma indicado abajo, y ésta se guardará en memoria.

[
    [ 1,1,1,0,0 ],
    [ 0,1,1,0,0 ],
    [ 1,0,0,0,0 ],
    [ 1,0,0,0,0 ],
    [ 0,0,0,1,0 ]
]

## Test

Los test se podrán correr desde la consola bajo el comando: 
$ jest


