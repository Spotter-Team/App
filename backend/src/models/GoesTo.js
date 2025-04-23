const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');
const Gym = require('./Gym');

const sequelize = require('./sequelize')

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