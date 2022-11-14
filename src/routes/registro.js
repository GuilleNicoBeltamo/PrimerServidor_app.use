const express = require("express");
const { registro } = require("../controllers/registro")

const router = express.Router();

router.get("/", registro);

module.exports = router;