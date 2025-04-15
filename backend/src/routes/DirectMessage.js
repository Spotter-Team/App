// routes/DirectMessage.js
const express = require('express');
const auth = require('../middleware/auth');
const DirectMessageController = require('../controllers/DirectMessageController');
const router = express.Router();

// Get all the accounts you have conversations with
router.get('/conversations', auth, (req, res) => {

});

// Get messages between you and another user
router.get('/:userID', auth, (req, res) => {
    const otherUserID = req.params.userID;

    if (!otherUserID) return res.status(400).json({ message: `The userID for the user your want to see messages from must be included in your request URL!` });

    const senderUserID = req.userID;
    if (!senderUserID) return res.status(500).json({ message: `The auth token once decoded did not include the sender userID!` });

    DirectMessageController.getMessagesBetweenUsers(senderUserID, otherUserID)
        .then(messages => {
            res.status(200).json({ message: `Successfully retrieved messages with userID '${otherUserID}'!`, messages });
        })
        .catch(err => {
            res.status(500).json({ message: `Messages could not be retrieved! Maybe the recipient was not registered?` });
        })
})

// Send a message to a user
router.post('/:userID', auth, (req, res) => {
    const recipientUserID = req.params.userID;
    if (!recipientUserID) return res.status(400).json({ message: `The userID for the user your messaging must be included in your request URL!` });

    const senderUserID = req.userID;
    const { message } = req.body;

    if (!senderUserID) return res.status(500).json({ message: `The auth token once decoded did not include the sender userID!` });

    if (!message) return res.status(400).json({ message: `Attribute 'message' must be included in the request body!` });

    DirectMessageController.sendMessageToUser(recipientUserID, senderUserID, message)
        .then(() => {
            res.status(200).json({ message: `Successfully send a message to the user with userID '${recipientUserID}'!` });
        })
        .catch(err => {
            res.status(500).json({ message: `Message could not be sent! Maybe the recipient was not registered?` });
        })
})

module.exports = router;