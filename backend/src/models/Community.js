const { Sequelize, DataTypes, Model } = require('sequelize');
const CommunityType = require('./CommunityType');

const sequelize = require('./sequelize')
class Community extends Model {}

const communitySchema = {
    cID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    typeID: {
        type: DataTypes.INTEGER,
        references: {
            model: CommunityType,
            key: 'typeID'
        }
    },
    cLocation: {
        type: DataTypes.TEXT,
    },
    numMembers: {
        type: DataTypes.INTEGER,
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
    },
};

Community.init(communitySchema, {
    sequelize: sequelize,
    modelName: 'Community'
});

module.exports = {
    communitySchema,
    Community
};
