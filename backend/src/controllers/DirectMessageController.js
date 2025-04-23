const { DirectMessage } = require('../models/DirectMessage');
const UserController = require('./UserController');

class DirectMessageController {
    /** PUBLIC METHODS */

    /**
     * 
     * @param { number } toUserID The userID for the user sending the message
     * @param { number } fromUserID The userID to send the message to
     * @param { string } content The content to send to the user
     * @returns { Promise<void> } A promise that resolves if the message was sent to the user
     */
    static sendMessageToUser(toUserID, fromUserID, content) {
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
                                    DirectMessage.addMessage(fromUserID, toUserID, content, 'text')
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
     * Get the chat messages between two users
     * @param { number } userID The id of the user requesting the chat messages
     * @param { User } otherUser The id of the user the requesting user has chatted with
     * @returns { Promise<{ id: number, senderID: number, content: string, type: string, timestamp: string }> }
     */
    static getChat(userID, otherUser) {
        return new Promise((resolve, reject) => {
            // Get the messages between the users
            DirectMessage.getMessages(userID, otherUser.userID)
                .then(messages => {
                    // Refactor the messages for frontend format
                    let newMessages = [];
                    messages.forEach(msg => {
                        newMessages.push({
                            id: msg.msgID,
                            senderId: messages.senderID,
                            content: msg.content,
                            type: msg.type,
                            timestamp: msg.timestamp
                        })
                    })

                    resolve({
                        senderId: otherUser.userID,
                        avatarUri: otherUser.avatarUri,
                        messages
                    })
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Gets all the chats the user has with other users
     * @param { number } userID The id of the user
     * @returns { Promise<{ id: number, name: string, avatarUri: string, messages: { id: number, senderID: number, content: string, type: string, timestamp: string }[] }[]> }
     */
    static getAllChats(userID) {
        return new Promise((resolve, reject) => {
            // Get all the users the user has direct messages with
            DirectMessageController.getAllRecipientsForUser(userID)
                .then(async recipients => {
                    /** @type { id: number, senderID: number, content: string, type: string, timestamp: string } */
                    let allChats = [];

                    // Get the chat for each recipient 
                    for (const otherUser of recipients) {
                        let chat = await DirectMessageController.getChat(userID, otherUser);
                        allChats.push(chat);
                    }

                    // Sort the chats by last message for each recipient
                    allChats.sort((a, b) => {
                        return new Date(b.messages[b.messages.length - 1].timestamp) - new Date(a.messages[a.messages.length - 1].timestamp);
                    });

                    let id = 1;
                    allChats.forEach(chat => {
                        chat.id = id;
                        id++;
                    })

                    resolve(allChats);
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

    /**
     * Get the information needed to populate a user's chat list
     * @param { number } userID The id of the user whose chat list you want to get
     * @returns { Promise<object[]> } A promise that resolves to an array of objects containing the chat list
     */
    static getChatList(userID) {
        return new Promise((resolve, reject) => {
            // Get the users this user has conversations with
            DirectMessageController.getAllRecipientsForUser(userID)
                .then(users => {
                    DirectMessage.getUnreadMessageCount(userID)
                        .then(async unreadDict => {
                            /** @type { Array<{ id: number,  name: string, lastMessage: object, unreadCount number }> } */
                            let chatList = [];

                            // For each user get the info for the 
                            for (const user of users) {
                                let chatListItem =  await DirectMessageController.getChatListItem(userID, user, unreadDict);
                                chatList.push(chatListItem);
                            };

                            // Order the messages by timestamp and assign ids
                            chatList.sort((a, b) => {
                                return new Date(b.lastMessage.timestamp) - new Date(a.lastMessage.timestamp);
                            });
    
                            let id = 1;
                            chatList.forEach(chatListItem => {
                                chatListItem.id = id;
                                id++;
                            })

                            resolve(chatList);
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
     * Gets the chat list item for a conversation between a user and another user
     * @param { number } userID The id of the user accessing the chat list
     * @param { User } otherUser The User object of a user in the accessing user's chat list
     * @param { { number: number } } unreadDict An object containing userIDs and corresponding unread counts
     * @returns { Promise<{ name: string, lastMessage: object, unreadCount number }> } A promise that resolves to a chat list item
     */
    static getChatListItem(userID, otherUser, unreadDict) {
        return new Promise((resolve, reject) => {
            const secondUserID = otherUser.userID;

            // Get the last message for each user
            let chatListItem = {};

            // Check to see if the user has unread messages with a user in their chat list
            if (unreadDict[secondUserID] != undefined) {
                chatListItem.unreadCount = unreadDict[secondUserID];
            } else {
                chatListItem.unreadCount = 0;
            }

            // Add the user's name to the chatListItem
            chatListItem.name = `${otherUser.firstName} ${otherUser.lastName}`;

            // Add the user's avatarUri to the chatListItem
            chatListItem.avatarUri = otherUser.avatarUri;

            DirectMessage.getLastMessageBetweenUsers(userID, secondUserID)
                .then(lastMessage => {
                    if (lastMessage !== null) {
                        chatListItem.lastMessage = {
                            senderId: lastMessage.senderID,
                            content: lastMessage.content,
                            type: lastMessage.type,
                            timestamp: lastMessage.timestamp
                        };
                    } else {
                        chatListItem.lastMessage = null;
                    }

                    resolve(chatListItem);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}

module.exports = DirectMessageController;