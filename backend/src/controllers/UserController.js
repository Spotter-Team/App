const User = require('../models/User');

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
     * @returns A promise which resolves to a login token if the login succeeds, and rejects if it fails
     */
    static login(username, pwd) {
        // TODO: implement login() function
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