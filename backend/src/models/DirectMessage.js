const { DataTypes, Model, Op, Sequelize } = require('sequelize');
const { User } = require('./User');

const sequelize = require('./sequelize')

class DirectMessage extends Model {

    /**
     * Gets all the messages between two users
     * @param { number } userOneID The first userID to find the messages
     * @param { number? } userTwoID The second userID to find the messages
     * @returns { Promise<DirectMessage[]>} A promise that resolves to an array which contain message records 
     */
    static getMessages(userOneID, userTwoID) {
        return new Promise((resolve, reject) => {
            // If only one user was passed, get all the messages the user sent or received
            if (userTwoID == null) {
                DirectMessage.findAll(
                    {
                        attributes: [ 'msgID', 'createdAt', 'senderID', 'receiverID', 'msg', 'read' ],
                        where: {
                            [Op.or]: [ { receiverID: userOneID }, { senderID: userOneID } ]
                        }
                    })
                    .then(messages => {
                        resolve(messages);
                    })
                    .catch(err => {
                        reject(err);
                    })
            } else {
                DirectMessage.findAll(
                    {
                        attributes: [ 'msgID', 'createdAt', 'senderID', 'receiverID', 'msg', 'read' ],
                        where: {
                            [Op.or]: [ { receiverID: userOneID }, { receiverID: userTwoID }, { senderID: userOneID }, { senderID: userTwoID } ]
                        }
                    })
                    .then(messages => {
                        resolve(messages);
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        })
    }

    /**
     * Adds a message to the DirectMessage table
     * @param { number } senderID The userID of the user sending the message
     * @param { number } receiverID The userID of the user receiving the message
     * @param { string } message The message text to add
     * @returns { Promise<DirectMessage> } A promise that resolves if the message was successfully added
     */
    static addMessage(senderID, receiverID, message) {
        return new Promise((resolve, reject) => {
            DirectMessage.create({ msg: message, senderID, receiverID })
                .then(msg => {
                    resolve(msg);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Looks for a specific message and marks it as read if the the user reading is the recipient
     * @param { number } userID The id of the user who read the message
     * @param { number } msgID The id of the message to mark as read
     * @returns { Promise<boolean> } A promise that resolves to a boolean value that indicates if the update was successful
     */
    static markMessageAsRead(userID, msgID) {
        return new Promise((resolve, reject) => {
            DirectMessage.update(
                { read: true },
                {
                    where: {
                        msgID,
                        receiverID: userID,
                        read: false
                    }
                }
            ).then(rowsMod => {
                const rowsAffected = rowsMod[0];

                if (rowsAffected == 1) {
                    resolve(true);
                } else {
                    resolve(false)
                }
            }).catch(err => {
                reject(err);
            })
        })
    }

    /**
     * Gets unread messages send to a particular user
     * @param { number } userID The id of the recipient user to get unread messages
     * @returns { Promise<DirectMessage[]> } A promise that resolves to an array of DirectMessage objects
     */
    static getUnreadMessages(userID) {
        return new Promise((resolve, reject) => {
            DirectMessage.findAll({
                attributes: [ 'msgID', 'createdAt', 'senderID', 'receiverID', 'msg', 'read' ],
                where: {
                    [Op.and]: [ { receiverID: userID }, { read: false } ]
                }
            })
            .then(messages => {
                resolve(messages);
            })
            .catch(err => {
                reject(err);
            })
        })
    }

    /**
     * Gets the unread message count per user the user has unread messages with
     * @param { number } userID The id of the recipient user to get unread messages
     * @returns { Promise<object[]>} A promise that resolves to an array of objects containing the user and number of unread messages
     */
    static getUnreadMessageCount(userID) {
        return new Promise((resolve, reject) => {
            DirectMessage.findAll({
                attributes: [
                    'senderID',
                    [Sequelize.fn('COUNT', Sequelize.col('msgID')), 'unreadCount']
                ],
                where: {
                    receiverID: userID,
                    read: false
                },
                group: ['senderID']
            })
            .then(unreadMsgCounts => {
                resolve(unreadMsgCounts);
            })
            .catch(err => {
                reject(err);
            })
        })
    }

    /**
     * Gets the last message between two users
     * @param { number } primaryUserID 
     * @param { number } secondaryUserID 
     * @returns { Promise<DirectMessage?> } A promise that resolves to a DirectMessage object or null
     */
    static getLastMessageBetweenUsers(primaryUserID, secondaryUserID) {
        return new Promise((resolve, reject) => {
            DirectMessage.findOne({
                where: {
                    [Op.or]: [
                        { senderID: primaryUserID, receiverID: secondaryUserID },
                        { senderID: secondaryUserID, receiverID: primaryUserID }
                    ]
                },
                order: [['createdAt', 'DESC']]
            })
            .then(message => {
                if (message != null) {
                    resolve(message.dataValues);
                } else {
                    resolve(null)
                }
            })
            .catch(err => {
                reject(err);
            })
        })
    }
}

const directMessageSchema = {
    msgID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    msg: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    senderID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    receiverID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
};

// Define User Model attributes
DirectMessage.init(
    directMessageSchema,
    {
        sequelize,
        modelName: 'DirectMessage'
    }
);

module.exports = {
    directMessageSchema,
    DirectMessage
};