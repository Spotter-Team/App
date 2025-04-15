// routes/User.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// create account route
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
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', email, password);

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    UserController.userIsRegistered(email)
        .then(isRegistered => {
            if (isRegistered) {
                UserController.login(email, password)
                    .then(token => {
                        return res.status(200).json({ message: 'Logged in successfully!', token });
                    })
                    .catch(() => {
                        return res.status(400).json({ message: 'Generic database error!' });
                    })
            } else {
                return res.status(400).json({ message: 'Email not found.' });
            }
        })
        .catch(err => {
            return res.status(400).json({ message: `Login failed! Error: ${err}` });
        })
});

// Get all users
// TODO: refactor to use UserController getAllUsers() function
router.get('/', (req, res) => {
    res.send(users);
});

module.exports = router;
