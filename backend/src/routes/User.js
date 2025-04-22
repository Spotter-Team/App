// routes/User.js
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

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
                    .catch(err => {
                        return res.status(400).json({ message: err });
                    })
            } else {
                return res.status(400).json({ message: 'Email not found.' });
            }
        })
        .catch(err => {
            return res.status(400).json({ message: `Login failed! Error: ${err}` });
        })
});

// get account info route
router.get('/account-info', auth, (req, res) => {
    const userID = req.userID;
    if (!userID) return res.status(500).json({ message: `The auth token once decoded did not include the sender userID!` });

    UserController.getUserAccountInfo(userID)
        .then(accountInfo => {
            res.status(200).json({ message: `Successfully retrieved the user account info!`, accountInfo })
        })
        .catch(err => {
            res.status(500).json({ message: `The account info for the user could not be received!`, error: err });
        })
});

// update account info route
router.put('/account-info', auth, (req, res) => {
    const userID = req.userID;
    if (!userID) return res.status(500).json({ message: `The auth token once decoded did not include the sender userID!` });

    const update = req.body;
    if (!update) return res.status(400).json({ message: `No update was passed in the request body! No update to account info can be performed!` });

    UserController.updateAccountInfo(userID, update)
        .then(accountInfo => {
            res.status(200).json({ message: 'The updatable attributes in the update passed in the request have been updated!', accountInfo })
        })
        .catch(err => {
            res.status(500).json({ message: `The account info for the user could not be updated!`, error: err });
        })
})

module.exports = router;
