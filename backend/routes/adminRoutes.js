const express = require("express");
const { testAdmin } = require("../controllers/adminController");

const router = express.Router();
router.get("/test", testAdmin);

router.get("/dashboard", (req, res) => {
    res.json({ message: "Admin dashboard loaded!" });
});

module.exports = router;
