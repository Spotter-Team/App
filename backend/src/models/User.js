const { Sequelize, DataTypes, Model, Op } = require('sequelize');
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
                        // TODO: Validate that the username passed is an email
                        User.create({ username: username, pwd: password })
                            .then(newUser => {
                                resolve(newUser);
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

    /**
     * Queries the database for a specific user and returns rows that are found
     * @param { string } username the query parameter to perform the search
     * @returns { Promise<User[]> } A promise that resolves to an array of users
     */
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

    /**
     * 
     * @param { string } username the user to find the password for
     * @returns { Promise<string> } A promise that resolves to a string representing the hashed password
     */
    static getUserPwdHash(username) {
        return new Promise((resolve, reject) => {
            // Try to get the user's row in the db
            User.findOne({ attributes: [ 'pwd' ], where: { username: username }})
                .then(user => {
                    resolve(user.dataValues.pwd);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Attempts to get a user record from the db
     * @param { string } username A username to be used for the query
     * @returns { Promise<object> } A promise that resolves to an object which contains the data values for the user
     */
    static getUser(username) {
        return new Promise((resolve, reject) => {
            // Try to get the user's row in the db
            User.findOne(
                {
                    attributes: [
                        'userID',
                        'username',
                        'pwd',
                        'phoneNumber',
                        'firstName',
                        'lastName',
                        'userLocation',
                        'fitnessLevel',
                        'trainerBadge',
                        'avatarUri'
                    ], 
                    where: {
                        username: username
                    }
                })
                .then(user => {
                    if (user !== null) {
                        resolve(user.dataValues);
                    } else {
                        reject({ code: 'USER_NOT_FOUND', msg: `User with username '${username}' was not found! ` })
                    }
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * 
     * @param { number } userID The userID to get the user for
     * @returns { Promise<object> } A promise that resolves to an object which contains the data values for the user
     */
    static getUserByID(userID) {
        return new Promise((resolve, reject) => {
            // Try to get the user's row in the db
            User.findOne(
                {
                    attributes: [
                        'userID',
                        'username',
                        'pwd',
                        'phoneNumber',
                        'firstName',
                        'lastName',
                        'userLocation',
                        'fitnessLevel',
                        'trainerBadge',
                        'avatarUri'
                    ], 
                    where: {
                        userID: userID
                    }
                })
                .then(user => {
                    if (user !== null) {
                        resolve(user.dataValues);
                    } else {
                        reject({ code: 'USER_NOT_FOUND', msg: `User with userID '${userID}' was not found! ` })
                    }
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Gets an array of user objects from an array of userIDs
     * @param { number[] } userIDs The userIDs to get the users for
     * @returns { Promise<User[]> } A promise that resolves to an array of User objects which contains the data values for the users
     */
    static getUsersByIDs(userIDs) {
        return new Promise((resolve, reject) => {
            // Try to get the user's row in the db
            User.findAll(
                {
                    attributes: [
                        'userID',
                        'username',
                        'phoneNumber',
                        'firstName',
                        'lastName',
                        'userLocation',
                        'fitnessLevel',
                        'trainerBadge',
                        'avatarUri'
                    ], 
                    where: {
                        userID: {
                            [Op.in]: userIDs
                        }
                    }
                })
                .then(users => {
                    resolve(users);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Gets the userID for a passed username if the username is registered
     * @param { string } username 
     * @returns { Promise<number> } A promise which resolves to the userID if the user is found
     */
    static getUserID(username) {
        return new Promise((resolve, reject) => {
            User.getUser(username)
                .then(userObj => {
                    if (userObj.userID != undefined) {
                        resolve(userObj.userID);
                    } else {
                        reject(`An error occurred! No parameter 'userID' found on the object returned by the query.`)
                    }
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Gets the account info for a particular user
     * @param { number } userID The id for the user whose account info you desire
     * @returns { Promise< { 
     *      userID: number,
     *      username: string,
     *      phoneNumber: string,
     *      firstName: string,
     *      lastName: string,
     *      addressLine1: string,
     *      addressLine2: string,
     *      addressState: string,
     *      addressCity: string,
     *      addressZipCode: number,
     *      addressCountry: string,
     *      fitnessLevel: number,
     *      trainerBadge: boolean,
     *      avatarUri: string
     * }> } Returns a promise which resolves to an object containing user account info
     */
    static getUserAccountByUserID(userID) {
        return new Promise((resolve, reject) => {
            // Try to get the user's row in the db
            User.findOne(
                {
                    attributes: [
                        'userID',
                        'username',
                        'phoneNumber',
                        'firstName',
                        'lastName',
                        'addressLine1',
                        'addressLine2',
                        'addressState',
                        'addressCity',
                        'addressZipCode',
                        'addressCountry',
                        'fitnessLevel',
                        'trainerBadge',
                        'avatarUri'
                    ], 
                    where: {
                        userID: userID
                    }
                })
                .then(user => {
                    if (user !== null) {
                        resolve(user.dataValues);
                    } else {
                        reject({ code: 'USER_NOT_FOUND', msg: `User with userID '${userID}' was not found! ` })
                    }
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Attempts to update attributes on a user record
     * @param { number } userID The userID for the user whose account info is being updated
     * @param { object } update The object that contains the updates
     * @returns { Promise<boolean> } A promise that resolves if the update was successful 
     */
    static updateUserAccount(userID, update) {
        return new Promise((resolve, reject) => {
            User.update(
                update,
                { where: { userID } }
            ).then(result => {
                const numAffected = result[0];

                // Determine if the update was successful
                if (numAffected < 1) {
                    reject(`Update failed! No rows ere affected1`);
                } else if (numAffected == 1) {
                    resolve();
                } else {
                    reject(`The number of rows that were updated is greater than 1, so some error occurred.`);
                }
            }).catch(err => {
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
        unique: true,
        get() {
            return this.getDataValue();
        }
    },
    pwd: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
            return this.getDataValue();
        }
    },
    phoneNumber: {
        type: DataTypes.TEXT
    },
    firstName: {
        type: DataTypes.TEXT
    },
    lastName: {
        type: DataTypes.TEXT
    },
    addressLine1: {
        type: DataTypes.TEXT
    },
    addressLine2: {
        type: DataTypes.TEXT
    },
    addressState: {
        type: DataTypes.TEXT
    },
    addressCity: {
        type: DataTypes.TEXT
    },
    addressZipCode: {
        type: DataTypes.NUMBER
    },
    addressCountry: {
        type: DataTypes.TEXT
    },
    userLocation: {
        type: DataTypes.TEXT
    },
    fitnessLevel: {
        type: DataTypes.INTEGER
    },
    trainerBadge: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    avatarUri: {
        type: DataTypes.TEXT
    }
}

User.init(
    userSchema, 
    {
        sequelize,
        modelName: 'User',
        hooks: {
            beforeCreate: async (user) => {
                const hashedPwd = await bcrypt.hash(user.dataValues.pwd, 10);
                user.pwd = hashedPwd;
            }
        }
    
    }
);

module.exports = { User, userSchema };