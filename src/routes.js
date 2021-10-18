const {Router} = require('express');
const router = Router()
var service = require('./service') 

router.route("/:id").get(service.getBuscaminasId)

router.route("/").get(service.getBuscaminas)

router.route("/guardar").post(service.postBuscaminas)

module.exports = router