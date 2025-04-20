const { Sequelize, DataTypes, Model } = require('sequelize');
const Workout = require('./Workout');
const WorkoutEquipment = require('./WorkoutEquipment');

const sequelize = require('./sequelize')

class RequiredEquipment extends Model {}

const requiredEquipmentSchema = {
    workoutID: {
        type: DataTypes.INTEGER,
        references: {
            model: Workout,
            key: 'workoutID'
        }
    },
    equipmentID: {
        type: DataTypes.INTEGER,
        references: {
            model: WorkoutEquipment,
            key: 'equipmentID'
        }
    }
};

// Define Meetup Model attributes
RequiredEquipment.init(requiredEquipmentSchema, {
        sequelize: sequelize,
        modelName: 'RequiredEquipment'
    }
);

module.exports = {
    requiredEquipmentSchema,
    RequiredEquipment
};