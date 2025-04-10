const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');
const TimeSlot = require('./TimeSlot');

const dbPath = process.env.LOCAL_DB_PATH;

if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: this.dbFilePath
});

class Availability extends Model {}

Availability.init({
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    tSlotID: {
        type: DataTypes.INTEGER,
        references: {
            model: TimeSlot,
            key: 'tSlotID'
        }
    }
}, {
    sequelize: sequelize,
    modelName: 'Availability'
});

module.exports = Availability;