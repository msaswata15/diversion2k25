const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { User } = require('./models'); // Import models

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow frontend requests
app.use(bodyParser.json());

// API Routes
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Create a user
app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all users
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
