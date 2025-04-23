const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');

const sequelize = require('./sequelize')

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