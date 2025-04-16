const assert = require('assert');
const { When, Then, Given } = require('@cucumber/cucumber');
require('@dotenvx/dotenvx').config({ path: 'test.env'});

const DatabaseService = require('../../../src/services/DatabaseService');
const { User } = require('../../../src/models/User');

const db = new DatabaseService();
const username = 'test@test.com';
const password = 'somethingSecure';

let newUser;

Given('A test DB environment has been initialized', async function() {
    return db.initLocalDB(true)
        .then(msg => {
            console.log(msg);
        })
})

When('A user requests to create an account and the username is not in use', async function () {
    return User.addNewUser(username, password)
        .then(user => {
            newUser = user;
        })
})

Then('A new row is added to the User table', function() {
    assert.ok(newUser instanceof User);
})