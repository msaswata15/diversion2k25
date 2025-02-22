const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());  // Allow requests from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (for images, CSS, etc.)
app.use('/public', express.static(path.join(__dirname, '../public')));

// Import and use routes
const routes = require('./routes');
app.use('/api', routes); // ✅ Prefix API routes with `/api`

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
