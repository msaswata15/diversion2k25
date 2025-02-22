const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["patient", "admin"], default: "patient" },
});

// Compare entered password with stored hashed password
UserSchema.methods.comparePassword = async function (enteredPassword) {
    console.log("🔑 Entered Password:", enteredPassword);
    console.log("📂 Stored Hashed Password:", this.password);

    const isMatch = await require("bcryptjs").compare(enteredPassword.trim(), this.password);
    console.log("🔍 Password Match Result:", isMatch);

    return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
