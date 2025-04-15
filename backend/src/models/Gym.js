const { Sequelize, DataTypes, Model } = require('sequelize');
const dbPath = process.env.LOCAL_DB_PATH;

if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: this.dbFilePath
});

class Gym extends Model {}

const gymSchema = {
    gymID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gymName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    gymLocation: {
        type: DataTypes.LOCATION,
        allowNull: false
    },
    gymAddress: {
        type: DataTypes.TEXT,
    },
    gymURL: {
        type: DataTypes.TEXT,
    }
};

Gym.init(gymSchema, {
    sequelize: sequelize,
    modelName: 'Gym'
});

module.exports = {
    gymSchema,
    Gym
};