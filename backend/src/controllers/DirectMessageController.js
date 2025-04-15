const { DirectMessage } = require('../models/DirectMessage');

class DirectMessageController {
    /** PUBLIC METHODS */

    /**
     * 
     * @param { string } toUserID The userID for the user to send the message to 
     * @param { string } msg The message to send to the user
     * @returns { Promise<void> } A promise that resolves if the message was sent to the user
     */
    static sendMsg(toUserID, msg) {
        return new Promise((resolve, reject) => {
            // Check to see if the user is registered

            // Check to see if the user sending the message is blocked by the user they are sending the message to
            
        })
    }
}

module.exports = DirectMessageController;