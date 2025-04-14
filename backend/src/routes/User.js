// routes/User.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// create account route
// TODO: refactor to use UserController createAccount() function
router.post('/create-account', (req, res) => {
    const { email, password } = req.body;

    
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    UserController.createAccount(email, password)
        .then(msg => {
            res.status(201).json({ message: 'Account created successfully!' });
        })
        .catch(err => {
            console.error('Error creating account:', err);
            res.status(500).json({ message: 'Failed to create account.' });
        })
});

// login route
// TODO: refactor to use UserController login() function
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
// TODO: refactor to use UserController getAllUsers() function
router.get('/', (req, res) => {
  res.send(users);
});

module.exports = router;
