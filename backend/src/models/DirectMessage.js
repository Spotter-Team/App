const { Sequelize, DataTypes, Model } = require('sequelize');
const { User } = require('./User');

const dbPath = process.env.LOCAL_DB_PATH;

if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: this.dbFilePath
});

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