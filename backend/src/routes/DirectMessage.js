// routes/DirectMessage.js
const express = require('express');
const auth = require('../middleware/auth');
const DirectMessageController = require('../controllers/DirectMessageController');
const router = express.Router();

// Get all the accounts you have conversations with
router.get('/conversations', auth, (req, res) => {
    const userID = req.userID;
    if (!userID) return res.status(500).json({ message: `The auth token once decoded did not include the sender userID!` });

    DirectMessageController.getAllRecipientsForUser(userID)
        .then(users => {
            res.status(200).json({ message: `Successfully received all the users the requester has conversations with!`, users });
        })
        .catch(err => {
            res.status(500).json({ message: `Messages recipients could not be retrieved!` });
        })
});

// Get messages between you and another user
router.get('/conversations/:userID', auth, (req, res) => {
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

// Gets the unread messages for a user
router.get('/unread', auth, (req, res) => {
    const userID = req.userID;
    if (!userID) return res.status(500).json({ message: `The auth token once decoded did not include the sender userID!` });

    DirectMessageController.getAllUnreadMessagesForUser(userID)
        .then(messages => {
            res.status(200).json({ message: `Successfully retrieved unread messages for userID '${userID}'!`, messages });
        })
        .catch(err => {
            res.status(500).json({ message: `Unread messages for user with userID ${userID} could not be retrieved!` });
        })
})

// Updates a message record to be read
router.put('/read/:msgID', auth, (req, res) => {
    const msgID = req.params.msgID;
    if (!msgID) return res.status(400).json({ message: `The msgID for the message to read must be included in your request URL!` });

    const userID = req.userID;
    if (!userID) return res.status(500).json({ message: `The auth token once decoded did not include the sender userID!` });

    DirectMessageController.readMessage(userID, msgID)
        .then(updateSucceeded => {
            if (updateSucceeded) {
                res.status(200).json({ message: `Successfully read the message!` });
            } else {
                res.status(400).json({ message: `The message could not be read! Maybe the requesting user was not the message's recipient.` })
            }
        })
        .catch(err => {
            res.status(500).json({ message: `Message could not be read! Maybe the message was not found in the database?` });
        })
})

// Send a message to a user
router.post('/conversations/:userID', auth, (req, res) => {
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