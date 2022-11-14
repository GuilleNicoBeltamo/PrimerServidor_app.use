const express = require("express");
const { getUserByID } = require("../controllers/userController")

const router = express.Router();

router.get("/:id", getUserByID)

module.exports = router;