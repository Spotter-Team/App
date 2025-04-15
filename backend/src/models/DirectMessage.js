const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');

const dbPath = process.env.LOCAL_DB_PATH;

if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: this.dbFilePath
});

class DirectMessage extends Model {}

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
};

// Define User Model attributes
DirectMessage.init(directMessageSchema, {
        sequelize: sequelize,
        modelName: 'DirectMessage'
});

module.exports = {
    directMessageSchema,
    DirectMessage
};