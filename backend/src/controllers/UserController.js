const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models/User');
const { Blocked } = require('../models/Blocked');

// Load JWT_SECRET
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    console.error(`Error: Variable JWT_SECRET was not found .env file!`);
    process.exit(1);
}

// Load DEFAULT_TOKEN_LIFE
const defaultTokenLife = process.env.DEFAULT_TOKEN_LIFE;
if (!defaultTokenLife) {
    console.error(`Error: Variable DEFAULT_TOKEN_LIFE was not found .env file!`);
    process.exit(1);
}

class UserController {
    /** STATIC PUBLIC PARAMETERS */
    static updatableAccountInfoAttributes = [
        'username',
        'phoneNumber',
        'firstName',
        'lastName',
        'addressLine1',
        'addressLine2',
        'addressLine3',
        'addressCity',
        'addressZipCode',
        'addressCountry',
        'fitnessLevel',
        'trainerBadge'
    ];

    /** PUBLIC METHODS */

    /**
     * Performs the account creation process based on the parameters passed to the func
     * @param {string} username 
     * @param {string} pwd 
     * @returns { Promise<void, any>} A promise which resolves if the account creation succeeds, and rejects if it fails
     */
    static createAccount(username, pwd) {
        return new Promise((resolve, reject) => {
            // Attempt to create the account
            User.addNewUser(username, pwd)
                .then(newUser => {
                    resolve(`Your account was created! Your username is '${newUser.username}'.`);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Performs authentication of a username and password
     * @param {string} username 
     * @param {string} pwd 
     * @returns { Promise<string>} A promise which resolves to a login token if the login succeeds, and rejects if it fails
     */
    static login(username, pwd) {
        return new Promise((resolve, reject) => {
            // Get the user record
            User.getUser(username)
                .then(userObj => {
                    bcrypt.compare(pwd, userObj.pwd)
                        .then(isMatch => {
                            if (isMatch) {
                                const token = jwt.sign( { userID: userObj.userID}, jwtSecret, { expiresIn: defaultTokenLife });

                                resolve(token);
                            } else {
                                reject(`Authentication failed! The password passed to the function was incorrect!`);
                            }
                        })
                        .catch(err => {
                            reject(err);
                        })
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Performs an update on the user's account info
     * @param { number } userID The userID for the user whose account info is being updated
     * @param { object } update The object that contains the updates
     * @returns { Promise<{
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
     * }> } A promise that resolves to the current state of the account info after the update
     */
    static updateAccountInfo(userID, update) {
        return new Promise((resolve, reject) => {
            // Validate the keys on the update object and discard any invalid attributes
            let cleanUpdate = {};
            let invalidAttributes = [];
            Object.keys(update).forEach(key => {
                if (UserController.updatableAccountInfoAttributes.includes(key)) {
                    cleanUpdate[key] = update[key];
                } else {
                    invalidAttributes.push(key);
                }
            });

            if (Object.keys(cleanUpdate).length == 0) {
                reject(`After removing invalid attributes, no valid updatable attributes remained. No update will be performed!`)
            } else {
                User.updateUserAccount(userID, cleanUpdate)
                    .then(() => {
                        // Get the user account info
                        User.getUserAccountByUserID(userID)
                            .then(accountInfo => {
                                resolve(accountInfo);
                            })
                            .catch(err => {
                                reject(err);
                            })
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        })
    }

    /**
     * Checks to see if the user has been registered
     * @param { string } username The username to check
     * @returns { Promise<boolean> } A Promise that resolves to true if the user exists in the DB
     */
    static userIsRegistered(username) {
        return new Promise((resolve, reject) => {
            User.usernameIsAvailable(username)
                .then(unregistered => {
                    resolve(!unregistered);
                })
                .catch(err => {
                    if (err.code == 'USER_NOT_FOUND') {
                        resolve(false);
                    } else {
                        reject(err);
                    }
                })
        })
    }

    /**
     * Checks to see if the user has been registered
     * @param { number } userID The userID for the user to check
     * @returns { Promise<boolean> } A Promise that resolves to true if the user exists in the DB
     */
    static userIDIsRegistered(userID) {
        return new Promise((resolve, reject) => {
            User.getUserByID(userID)
                .then(() => {
                    resolve(true);
                })
                .catch(err => {
                    if (err.code == 'USER_NOT_FOUND') {
                        resolve(false);
                    } else {
                        reject(err);
                    }
                })
        })
    }


    /**
     * Gets the User objects for the passed userIDs
     * @param { number[] } userIDs An array of userIDs to find the users for
     * @returns { Promise<User[]> } A promise that resolves to an array of User objects
     */
    static getUsersForUserIDs(userIDs) {
        return new Promise((resolve, reject) => {
            User.getUsersByIDs(userIDs)
                .then(users => {
                    resolve(users)
                })
                .catch(err => {
                    reject(err);
                })
        })
    } 

    /**
     * Gets information about one user
     * @param { string } username 
     * @returns { Promise<object> } A promise that resolves to a user object if the user is found
     */
    static getUser(username) {
        return new Promise((resolve, reject) => {
            User.getUser(username)
                .then(userObj => {
                    resolve(userObj);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Get the current account info for a user
     * @param { number } userID The id of the user to get the account info for
     * @returns { Promise<{
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
     * }> } A promise that resolved to an object containing the user account info
     */
    static getUserAccountInfo(userID) {
        return new Promise((resolve, reject) => {
            User.getUserAccountByUserID(userID)
                .then(accountInfo => {
                    resolve(accountInfo);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Checks to see if a user is blocked by another user
     * @param { number } userID The userID for the user whose block list you want to check
     * @param { number } userToCheckID The userID to check for on the block list
     * @returns 
     */
    static isBlocked(userID, userToCheckID) {
        return new Promise((resolve, reject) => {
            // TODO: Implement logic to check if a user is blocked by another user
        })
    }
}

module.exports = UserController;