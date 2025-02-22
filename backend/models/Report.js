const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
    patientId: mongoose.Schema.Types.ObjectId,
    reportName: String,
    reportURL: String
});

module.exports = mongoose.model("Report", ReportSchema);
