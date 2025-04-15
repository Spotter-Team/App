const { Sequelize, DataTypes, Model } = require('sequelize');
const { User } = require('./User');

const sequelize = require('./sequelize')

class DirectMessage extends Model {

    /**
     * Gets all the messages sent to the user
     * @param { string } username The user to find the messages for
     * @returns { Promise<Object[]>} A promise that resolves to an array which contain message records 
     */
    static getMessages(username) {
        return new Promise((resolve, reject) => {
            // Get the userID from the username
            User.getUserID(username)
                .then(userID => {
                    DirectMessage.findAll({ attributes: [ 'tStamp', 'senderID', 'receiverID', 'msg'], where: { receiverID: userID } })
                        .then(messages => {
                            resolve(messages);
                        })
                        .catch(err => {
                            reject(err);
                        })
                })
        })
    }

    /**
     * Adds a message to the DirectMessage table
     * @param { number } senderID The userID of the user sending the message
     * @param { number } receiverID The userID of the user receiving the message
     * @param { string } message The message text to add
     * @returns { Promise<void> } A promise that resolves if the message was successfully added
     */
    static addMessage(senderID, receiverID, message) {
        return new Promise((resolve, reject) => {

        })
    }
}

const directMessageSchema = {
    msgID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tStamp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    msg: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            return this.getDataValue();
        }
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
    }
};

// Define User Model attributes
DirectMessage.init(
    directMessageSchema,
    {
        sequelize,
        modelName: 'DirectMessage',
        hooks: {
            beforeCreate: (message, options) => {
                message.tStamp = new Date();
            }
        }
    }
);

module.exports = {
    directMessageSchema,
    DirectMessage
};