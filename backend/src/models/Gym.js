const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('./sequelize')
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
        type: DataTypes.GEOGRAPHY,
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