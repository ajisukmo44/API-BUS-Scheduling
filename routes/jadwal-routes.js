const express = require("express");
const router = express.Router();
const JadwalController = require("../controllers/JadwalController");

router.get("/", JadwalController.getAllJadwal);

router.post("/", JadwalController.createJadwal);

router.patch("/:id", JadwalController.updateJadwal);

router.delete("/:id", JadwalController.deleteJadwal);

module.exports = router;