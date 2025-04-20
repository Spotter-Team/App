const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('./sequelize')

class Workout extends Model {}

const workoutSchema = {
    workoutID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    workoutName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    workoutDescription: {
        type: DataTypes.TEXT
    }
};

// Define Meetup Model attributes
Workout.init(workoutSchema, {
        sequelize: sequelize,
        modelName: 'Workout'
    }
);

module.exports = {
    workoutSchema,
    Workout
};