const { Sequelize, DataTypes, Model } = require('sequelize');
require('dotenv').config();

// Connect to your local DB
const dbPath = process.env.LOCAL_DB_PATH;
if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}
const sequelize = new Sequelize(dbPath);

class User extends Model {
    userID;
    email;
    pwd;
    phoneNumber;
    firstName;
    lastName;
    userLocation;
    fitnessLevel;
    trainerBadge;
}

// Define User Model attributes
User.init(
    {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        pwd: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.TEXT,
        },
        firstName: {
            type: DataTypes.TEXT,
        },
        lastName: {
            type: DataTypes.TEXT,
        },
        userLocation: {
            type: DataTypes.TEXT
        },
        fitnessLevel: {
            type: DataTypes.INTEGER,
        },
        trainerBadge: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
);

module.exports = User;