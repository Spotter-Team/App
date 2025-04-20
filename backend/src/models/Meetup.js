const { Sequelize, DataTypes, Model } = require('sequelize');
const TimeSlot = require('../models/TimeSlot');

const sequelize = require('./sequelize')

class Meetup extends Model {}

const meetupSchema = {
    meetupID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    meetupLocation: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    meetupTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TimeSlot,
            key: 'slotID'
        }
    }
};

// Define Meetup Model attributes
Meetup.init(meetupSchema, {
        sequelize: sequelize,
        modelName: 'Meetup'
    }
);

module.exports = {
    meetupSchema,
    Meetup
};