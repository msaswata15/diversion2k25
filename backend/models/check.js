const bcrypt = require("bcryptjs");

async function testBcrypt() {
    const originalPassword = "Test@123";

    // Simulate password stored in DB
    const storedHash = await bcrypt.hash(originalPassword, 10);
    console.log("🔒 Stored Hashed Password:", storedHash);

    // Now check if bcrypt.compare() works
    const isMatch = await bcrypt.compare(originalPassword, storedHash);
    console.log("🔍 Password Match Result:", isMatch);
}

testBcrypt();
