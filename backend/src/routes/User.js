// routes/Users.js
const express = require('express');
const router = express.Router();

// Temporary storage
let users = [];

// create account route
router.post('/create-account', (req, res) => {
    const { email, password } = req.body;

    
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    if (users.find((user) => user.email === email)) {
        return res.status(400).json({ message: 'Email is already registered' });
    }

    try {
        users.push({ email, password }); 
        res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Failed to create account.' });
    }
});

// login route
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', email, password);

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required.' });
    }

    const user = users.find((u) => u.email === email);
    console.log('Found user:', user);

    if (!user) {
        return res.status(400).json({ message: 'Email not found.' });
    }

    if (user.password !== password) {
        console.log('Password mismatch:', user.password, 'vs', password);
        return res.status(400).json({ message: 'Incorrect password.' });
    }

    return res.json({ message: 'Logged in successfully!' });
});

// Get all users
router.get('/', (req, res) => {
  res.send(users);
});

module.exports = router;
