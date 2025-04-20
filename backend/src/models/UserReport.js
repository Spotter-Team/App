const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');
const UserReportType = require('./UserReportType');

const sequelize = require('./sequelize')

class UserReport extends Model {}

const userReportSchema = {
    reportID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    reporterID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    reportTypeID: {
        type: DataTypes.INTEGER,
        references: {
            model: UserReportType,
            key: 'reportTypeID'
        }
    }
};

// Define Meetup Model attributes
UserReport.init(userReportSchema, {
        sequelize: sequelize,
        modelName: 'UserReport'
    }
);

module.exports = {
    userReportSchema,
    UserReport
};