const express = require("express");
const router = express.Router();
const TerminalController = require("../controllers/TerminalController");

router.get("/", TerminalController.getAllTerminal);
router.post("/", TerminalController.createTerminal);
router.patch("/:id", TerminalController.updateTerminal);
router.delete("/:id", TerminalController.deleteTerminal);

module.exports = router;