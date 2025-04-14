// routes/DirectMessage.js
const express = require('express');
const router = express.Router();

// Get all the accounts you have conversations with
router.get('/conversations', (req, res) => {

});

// Get messages between you and another user
router.get('/:userID', (req, res) => {
    const userID = req.params.userID;
})

// Send a message to a user
router.post('/:userID', (req, res) => {
    const userID = req.params.userID;
    const message = req.body;
})

module.exports = router;