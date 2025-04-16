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
                    const userIDSet = new Set();

                    messages.forEach(msg => {
                        if (msg.receiverID != userID) {
                            userIDSet.add(msg.receiverID);
                        }

                        if (msg.senderID != userID) { 
                            userIDSet.add(msg.senderID);
                        }
                    })

                    // For each userID the user has send or received messages, get the user objects
                    const userIDs = Array.from(userIDSet);
                    UserController.getUsersForUserIDs(userIDs)
                        .then(users => {
                            resolve(users);
                        })
                        .catch(err => {
                            reject(err);
                        })
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Gets all the unread messages for a user
     * @param { number } userID The user to find unread messages for
     * @returns { Promise<DirectMessage[]> } A promise that resolves to an array of DirectMessage objects
     */
    static getAllUnreadMessagesForUser(userID) {
        return new Promise((resolve, reject) => {
            DirectMessage.getUnreadMessages(userID)
                .then(messages => {
                    resolve(messages);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Attempts to mark a message as read
     * @param { number } userID The id of the message to mark as read
     * @param { number } msgID The user who is reading the message
     * @returns { Promise<boolean> } A promise that resolves to true if the message was successfully marked as read
     */
    static readMessage(userID, msgID) {
        return new Promise((resolve, reject) => {
            DirectMessage.markMessageAsRead(userID, msgID)
                .then(updateSucceeded => {
                    resolve(updateSucceeded);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}

module.exports = DirectMessageController;