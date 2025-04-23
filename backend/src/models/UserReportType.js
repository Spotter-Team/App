const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('./sequelize')

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