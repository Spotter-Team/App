const { DirectMessage } = require('../models/DirectMessage');
const UserController = require('./UserController');

class DirectMessageController {
    /** PUBLIC METHODS */

    /**
     * 
     * @param { string } toUserID The userID for the user to send the message to 
     * @param { string } msg The message to send to the user
     * @returns { Promise<void> } A promise that resolves if the message was sent to the user
     */
    static sendMessageToUser(toUserID, fromUserID, msg) {
        return new Promise((resolve, reject) => {
            // Check to see if both the users are registered
            UserController.userIDIsRegistered(toUserID)
                .then(toUserIsRegistered => {
                    if (toUserIsRegistered) {
                        UserController.userIDIsRegistered(fromUserID)
                            .then(fromUserIsRegistered => {
                                if (fromUserIsRegistered) {
                                    // TODO: Check to see if the user sending the message is blocked by the user they are sending the message to
                                    // Add the message to the DirectMessage table
                                    DirectMessage.addMessage(fromUserID, toUserID, msg)
                                        .then(() => {
                                            resolve();
                                        })
                                        .catch(err => {
                                            reject(err);
                                        })
                                } else {
                                    reject(`A message from a user with userID '${fromUserID}' could not be sent! The sender is not registered!`)
                                }
                            })
                            .catch(err => {
                                reject(err);
                            })
                    } else {
                        reject(`A message to a recipient with userID '${toUserID}' could not be sent! The intended recipient is not registered!`)
                    }
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Gets all the messages sent to a user from another user
     * @param { number } userOneID The userID for the user to get the messages for
     * @param { number } userTwoID The userID for the user who send
     * @returns { Promise<DirectMessage[]> } A promise that resolves to an array of messages between users
     */
    static getMessagesBetweenUsers(userOneID, userTwoID) {
        return new Promise((resolve, reject) => {
            DirectMessage.getMessages(userOneID, userTwoID)
                .then(messages => {
                    resolve(messages);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Gets all the users a user has messaged with
     * @param { number } userID The user to check for recipients
     * @returns { Promise<User[]> } A promise that resolves to an array of User objects
     */
    static getAllRecipientsForUser(userID) {
        return new Promise((resolve, reject) => {
            DirectMessage.getMessages(userID)
                .then(messages => {
                    // TODO: parse messages to get all the unique users the user has sent or received messages from
                    
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}

module.exports = DirectMessageController;