const express = require("express");
const { InicioSesion } = require("../controllers/InicioSesion")

const router = express.Router();

router.get("/", InicioSesion);

module.exports = router;