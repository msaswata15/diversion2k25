require("dotenv").config(); // Ensure this is at the very top

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB(); // Call AFTER dotenv is loaded

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/patient", require("./routes/patientRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
