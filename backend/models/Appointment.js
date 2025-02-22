const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    doctor: String,
    date: String,
    time: String,
    status: { type: String, enum: ["scheduled", "completed", "cancelled"], default: "scheduled" }
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
