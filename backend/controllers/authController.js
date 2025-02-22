const bcrypt = require("bcryptjs");

const User = require("../models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        console.log("📩 Signup Attempt - Email:", email);
        console.log("🔑 Entered Password:", password);

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        console.log("🔒 Hashing Password...");
        const hashedPassword = await bcrypt.hash(password.trim(), 10);
        console.log("✅ Hashed Password:", hashedPassword);

        const newUser = new User({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            role: role || "patient",
        });

        await newUser.save();
        console.log("✅ User Saved:", newUser);

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("🚨 Signup Error:", error);
        res.status(500).json({ error: "Server error!" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("📩 Login Attempt - Email:", email);
        console.log("🔑 Entered Password:", password);

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            console.log("❌ User not found");
            return res.status(400).json({ error: "Invalid email or password" });
        }

        console.log("✅ User Found:", user);
        console.log("📂 Stored Hashed Password:", user.password);

        const isMatch = await user.comparePassword(password);

        console.log("🔍 Password Match Result:", isMatch);

        if (!isMatch) {
            console.log("❌ Invalid password");
            return res.status(400).json({ error: "Invalid email or password" });
        }

        console.log("✅ Login Successful!");

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("🚨 Login Error:", error);
        res.status(500).json({ error: "Server error!" });
    }
};

module.exports = { signup, login };