const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('./User');
const Community = require('./Community');

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