const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');

const sequelize = require('./sequelize')

class Blocked extends Model {}

const blockedSchema = {
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
};

Blocked.init(blockedSchema, {
    sequelize: sequelize,
    modelName: 'Blocked'
});

module.exports = {
    Blocked,
    blockedSchema
};