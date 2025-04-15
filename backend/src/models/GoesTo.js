const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');
const Gym = require('./Gym');

const dbPath = process.env.LOCAL_DB_PATH;

if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: this.dbFilePath
});

class GoesTo extends Model {}

const goesToSchema = {
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    gymID: {
        type: DataTypes.INTEGER,
        references: {
            model: Gym,
            key: 'gymID'
        }
    }
};

GoesTo.init(goesToSchema, {
    sequelize: sequelize,
    modelName: 'GoesTo'
});

module.exports = {
    goesToSchema,
    GoesTo
};