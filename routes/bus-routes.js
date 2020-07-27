const express = require("express");
const router = express.Router();
const BusController = require("../controllers/BusController");

router.get("/", BusController.getAllBus);

router.post("/", BusController.createBus);

router.patch("/:id", BusController.updateBus);

router.delete("/:id", BusController.deleteBus);

module.exports = router;