const User = require('../models/User');

class UserController {
    /** @type { User } */
    user;

    constructor() {
        this.user = User;
    }

    /** PUBLIC METHODS */

    /**
     * Performs the account creation process based on the parameters passed to the func
     * @param {string} username 
     * @param {string} pwd 
     * @returns A promise which resolves if the account creation succeeds, and rejects if it fails
     */
    createAccount(username, pwd) {
        // TODO: implement createAccount() function
    }

    /**
     * Performs authentication of a username and password
     * @param {string} username 
     * @param {string} pwd 
     * @returns A promise which resolves to a login token if the login succeeds, and rejects if it fails
     */
    login(username, pwd) {
        // TODO: implement login() function
    }

    /**
     * Gets the usernames for all the users in the Users table
     * @returns An array of usernames
     */
    getAllUsers() {
        // TODO: implement getAllUsers() function
    }
}

module.exports = UserController;