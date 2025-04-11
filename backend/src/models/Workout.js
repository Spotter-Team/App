const { Sequelize, DataTypes, Model } = require('sequelize');

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

class Workout extends Model {}

// Define Meetup Model attributes
Workout.init(
    {
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
    },
    {
        sequelize,
        modelName: 'Workout'
    }
);

module.exports = Workout;