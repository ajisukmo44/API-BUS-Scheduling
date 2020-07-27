const express = require("express");
const router = express.Router();
const CariJadwalBus = require("../controllers/CariJadwalController");


router.get("/", CariJadwalBus.getAllJadwal);
router.post("/", CariJadwalBus.carijadwal);

module.exports = router;