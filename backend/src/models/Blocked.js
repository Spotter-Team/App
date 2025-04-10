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

class Blocked extends Model {}

Blocked.init({
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    blockedBy: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    }
}, {
    sequelize: sequelize,
    modelName: 'Blocked'
});

module.exports = Blocked;