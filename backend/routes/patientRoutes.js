const express = require("express");
const { testPatient } = require("../controllers/patientController");

const router = express.Router();
router.get("/test", testPatient);

router.get("/profile", (req, res) => {
    res.json({ message: "Patient profile fetched successfully!" });
});

module.exports = router;
