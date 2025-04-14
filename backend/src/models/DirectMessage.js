const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');

// Import common sequelize config
const sequelize = require('./sequelize');

class DirectMessage extends Model {}

// Define User Model attributes
DirectMessage.init(
    {
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
        }
    },
    {
        sequelize,
        modelName: 'DirectMessage'
    }
);

module.exports = DirectMessage;