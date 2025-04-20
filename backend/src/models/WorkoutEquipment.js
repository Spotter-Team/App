const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('./sequelize')

class WorkoutEquipment extends Model {}

const workoutEquipmentSchema = {
    equipmentID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    equipmentName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    equipmentDescription: {
        type: DataTypes.TEXT
    }
};

// Define Meetup Model attributes
WorkoutEquipment.init(workoutEquipmentSchema,{
        sequelize: sequelize,
        modelName: 'WorkoutEquipment'
    }
);

module.exports = {
    workoutEquipmentSchema,
    WorkoutEquipment
};