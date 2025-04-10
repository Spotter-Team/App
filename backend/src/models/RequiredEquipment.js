const { Sequelize, DataTypes, Model } = require('sequelize');
const Workout = require('./Workout');
const WorkoutEquipment = require('./WorkoutEquipment');

// Connect to your local DB
const dbPath = process.env.LOCAL_DB_PATH;
if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: this.dbFilePath
});

class RequiredEquipment extends Model {}

// Define Meetup Model attributes
RequiredEquipment.init(
    {
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
    },
    {
        sequelize,
        modelName: 'RequiredEquipment'
    }
);

module.exports = RequiredEquipment;