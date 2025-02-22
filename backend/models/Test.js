const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    testName: String,
    date: String,
    status: { type: String, enum: ["scheduled", "completed"], default: "scheduled" }
});

module.exports = mongoose.model("Test", TestSchema);
