const express = require("express");
const { getUserByID } = require("../controllers/userController");
const { SelectFail } = require("../controllers/SelectFail");

const router = express.Router();

router.get("/", SelectFail);
router.get("/:id", getUserByID)

module.exports = router;