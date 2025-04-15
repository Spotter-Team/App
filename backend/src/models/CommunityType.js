const { Sequelize, DataTypes, Model } = require('sequelize');

const dbPath = process.env.LOCAL_DB_PATH;

if (!dbPath) {
    console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
    process.exit(1);
}

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: this.dbFilePath
});

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