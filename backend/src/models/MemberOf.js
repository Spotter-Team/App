const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');
const Community = require('./Community');

const sequelize = require('./sequelize')

class MemberOf extends Model {}

const memberOfSchema = {
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'userID'
        }
    },
    communityID: {
        type: DataTypes.INTEGER,
        references: {
            model: Community,
            key: 'cID'
        }
    }
};

// Define Meetup Model attributes
MemberOf.init(memberOfSchema, {
        sequelize: sequelize,
        modelName: 'MemberOf'
    }
);

module.exports = {
    memberOfSchema,
    MemberOf
};