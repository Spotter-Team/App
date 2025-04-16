const express = require('express');

// Require routes
const userRoutes = require('./routes/User');
const directMessageRoutes = require('./routes/DirectMessage');

const app = express();
const port = 3000;

app.use(express.json());


app.listen(port, '0.0.0.0', () => {
    console.log(`Backend server is running on http://localhost:${port}`);
});

// Register routes
app.use('/api/user', userRoutes);
app.use('/api/msg', directMessageRoutes);
