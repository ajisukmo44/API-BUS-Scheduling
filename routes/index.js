const express = require("express");
const router = express.Router();
const bus = require("./bus-routes");
const jadwal = require("./jadwal-routes");
const terminal = require("./terminal-routes")
const carijadwal = require("./carijadwal-routes");

router.use("/bus", bus);
router.use("/jadwal", jadwal);
router.use("/terminal", terminal);
router.use("/carijadwal", carijadwal);

module.exports = router;