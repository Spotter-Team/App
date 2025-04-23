const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('./sequelize')

class CommunityType extends Model {}

const communityTypeSchema = {
    typeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    typeDescription: {
        type: DataTypes.TEXT
    }
};

CommunityType.init(communityTypeSchema, {
    sequelize: sequelize,
    modelName: 'CommunityType'
});

module.exports = {
    communityTypeSchema,
    CommunityType
};