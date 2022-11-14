const express = require("express");
const { ServiceSelect } = require("../controllers/ServiceSelect")
const { ServiceSelectFail } = require("../controllers/ServiceSelectFail")

const router = express.Router();

router.get("/", ServiceSelectFail);
router.get("/:id", ServiceSelect);

module.exports = router;