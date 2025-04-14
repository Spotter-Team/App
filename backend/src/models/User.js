const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('./sequelize')

class User extends Model {

    /**
     * Checks to see if the username already exists in the DB
     * @param { string } username
     * @returns { Promise<boolean, any>} A promise which resolves to true if the username is available, false if it isn't, and rejects if an error occurs
     */
    static usernameIsAvailable(username) {
        return new Promise((resolve, reject) => {
            User.findUser(username).then(rows => {
                if (rows.length == 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }).catch(err => {
                reject(err);
            })
        })
    }

    /**
     * Adds a new User to the user table
     * @param {string} username 
     * @param {string} password 
     * @returns { Promise<User, Sequelize.ValidationError> } A promise which resolves if the new user was added and rejects if an unhandled error occurs
     */
    static addNewUser(username, password) {
        return new Promise((resolve, reject) => {
            // Check to see if the username is available
            User.usernameIsAvailable(username)
                .then(isAvailable => {
                    if (isAvailable) {
                        // Hash the user's password
                        bcrypt.hash(password, 10)
                            .then(hashedPwd => {
                                // Attempt to add then new user record to the db
                                User.create({ username: username, pwd: hashedPwd })
                                    .then(newUser => {
                                        resolve(newUser);
                                    })
                                    .catch(err => {
                                        reject(err);
                                    })
                            })
                            .catch(err => {
                                reject(err);
                            })
                    } else {
                        reject(`The username '${username}' is already in use! The account could not be created!`);
                    }
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    static findUser(username) {
        return new Promise((resolve, reject) => {
            User.findAll({
                attributes: ['username'],
                where: {
                    username: username
                }
            }).then(rows => {
                resolve(rows);
            })
            .catch(err => {
                reject(err);
            })
        })
    }
}

// Define User Model attributes
const userSchema = {
    userID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            return this.getDataValue();
        }
    },
    pwd: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.TEXT,
    },
    firstName: {
        type: DataTypes.TEXT,
    },
    lastName: {
        type: DataTypes.TEXT,
    },
    userLocation: {
        type: DataTypes.TEXT
    },
    fitnessLevel: {
        type: DataTypes.INTEGER,
    },
    trainerBadge: {
        type: DataTypes.BOOLEAN
    }
}

User.init(
    userSchema, 
    {
        sequelize,
        modelName: 'User'
    }
);

module.exports = { User, userSchema };