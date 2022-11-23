const express = require("express");
const { ServiceSelect } = require("../controllers/ServiceSelect")
const { SelectFail } = require("../controllers/SelectFail")

const router = express.Router();

router.get("/", SelectFail);
router.get("/:id", ServiceSelect);

module.exports = router;