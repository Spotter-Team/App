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

class User extends Model {}

// Define User Model attributes
User.init(
    {
        userID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        pwd: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phoneNumber: DataTypes.TEXT,
        firstName: DataTypes.TEXT,
        lastName: DataTypes.TEXT,
        userLocation: DataTypes.TEXT,
        fitnessLevel: DataTypes.INTEGER,
        trainerBadge: DataTypes.BOOLEAN
    }, 
    {
        sequelize,
        modelName: 'User'
    }
);

module.exports = User;