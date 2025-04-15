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

class Match extends Model {}

const matchSchema = {
    matchID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    spotterID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    spottedID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    matchScore: {
        type: DataTypes.INTEGER,
    }
};

Match.init(matchSchema, {
    sequelize: sequelize,
    modelName: 'Match'
});

module.exports = {
    matchSchema,
    Match
};