const assert = require('assert');
const { When, Then, Given, AfterAll } = require('@cucumber/cucumber');

const DatabaseService = require('../../src/services/DatabaseService');
const { User } = require('../../src/models/User');

const db = new DatabaseService();
const username = 'test@test.com';
const password = 'somethingSecure';

let newUser;

Given('a test DB environment has been initialized to test the user model', async function() {
    return db.initLocalDB(true)
        .then(msg => {
            console.log(msg);
        })
})

When('a user requests to create an account and the username is not in use', async function () {
    return User.addNewUser(username, password)
        .then(user => {
            newUser = user;
        })
})

Then('a new row is added to the User table', function() {
    assert.ok(newUser instanceof User);
})