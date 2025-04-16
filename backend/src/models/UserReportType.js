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

class UserReportType extends Model {}

const userReportTypeSchema = {
    reportTypeID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    reportTypeName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    reportTypeDescription: {
        type: DataTypes.TEXT
    }
};

// Define Meetup Model attributes
UserReportType.init(userReportTypeSchema, {
        sequelize: sequelize,
        modelName: 'UserReportType'
    }
);

module.exports = {
    userReportTypeSchema,
    UserReportType
};