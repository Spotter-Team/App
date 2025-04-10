const { Sequelize, DataTypes, Model } = require('sequelize');

// Connect to your local DB
const dbPath = process.env.LOCAL_DB_PATH;
if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: this.dbFilePath
});

class TimeSlot extends Model {}

// Define TimeSlot Model attributes
TimeSlot.init(
    {
        slotID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        startTStamp: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endTStamp: {
            type: DataTypes.DATE,
            allowNull: false
        },
        available: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        modelName: 'TimeSlot'
    }
);

module.exports = TimeSlot;