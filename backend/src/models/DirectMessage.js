const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');
require('dotenv').config();

// Connect to your local DB
const dbPath = process.env.LOCAL_DB_PATH;
if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}
const sequelize = new Sequelize(dbPath);

class DirectMessage extends Model {
    msgID;
    tStamp;
    msg;
    senderID;
    receiverID;
}

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