const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('./sequelize')

class TimeSlot extends Model {}

const timeSlotSchema = {
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
};

// Define TimeSlot Model attributes
TimeSlot.init(timeSlotSchema, {
        sequelize: sequelize,
        modelName: 'TimeSlot'
    }
);

module.exports = {
    timeSlotSchema,
    TimeSlot
};