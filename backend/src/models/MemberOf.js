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

// Define Meetup Model attributes
MemberOf.init(
    {
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
    },
    {
        sequelize,
        modelName: 'MemberOf'
    }
);

module.exports = MemberOf;