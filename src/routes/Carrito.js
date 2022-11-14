const express = require("express");
const { Carrito } = require("../controllers/Carrito")

const router = express.Router();

router.get("/", Carrito);

module.exports = router;