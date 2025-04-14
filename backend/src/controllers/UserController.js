const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models/User');

// Load JWT_secret
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    console.error(`Error: Variable JWT_SECRET was not found .env file!`);
    process.exit(1);
}

class UserController {
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
                                const token = jwt.sign( { userId: userObj.userID}, jwtSecret, { expiresIn: '1h' });

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
     * Checks to see if the user has been registerd
     * @param { string } username 
     * @returns { Promise<boolean> } A Promise that resolves to true if the user exists in the DB
     */
    static userIsRegistered(username) {
        return new Promise((resolve, reject) => {
            User.usernameIsAvailable(username)
                .then(unregistered => {
                    resolve(!unregistered);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    /**
     * Gets the usernames for all the users in the Users table
     * @returns An array of usernames
     */
    static getAllUsers() {
        // TODO: implement getAllUsers() function
    }
}

module.exports = UserController;