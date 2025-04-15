const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');
const TimeSlot = require('./TimeSlot');

const sequelize = require('./sequelize')

class Availability extends Model {}

const availabilitySchema = {
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
};

Availability.init(availabilitySchema, {
    sequelize: sequelize,
    modelName: 'Availability'
});

module.exports = {
    availabilitySchema,
    Availability
};