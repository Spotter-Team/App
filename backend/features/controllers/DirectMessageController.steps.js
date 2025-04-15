const assert = require('assert');
const { When, Then, Given, Before, AfterAll } = require('@cucumber/cucumber');

const DatabaseService = require('../../src/services/DatabaseService');
const UserController = require('../../src/controllers/UserController');
const DirectMessageController = require('../../src/controllers/DirectMessageController');

const db = new DatabaseService();

// Information for the test users
const msg = 'This message is a test!';
const userOneUsername = 'userOne@spotter.com';
const userOnePassword = 'password';
const userTwoUsername = 'userTwo@spotter.com';
const userTwoPassword = 'password';

Before(async function() {
    return db.initLocalDB(true)
        .then(() => {
            console.log(`Database info:`)
            console.log(`Local DB path: ${db.dbFilePath}`);

            console.log(`Database connection info:`)
            console.log(`Database path: ${db.sequelize.connectionManager}`)

            // Register the first user
            UserController.createAccount(userOneUsername, userOnePassword)
                .then(() => {
                    UserController.getUser(userOneUsername)
                        .then(userObj => {
                            if (userObj.userID != undefined) {
                                // Register the second user
                                UserController.createAccount(userTwoUsername, userTwoPassword)
                                    .then(() => {
                                        UserController.getUser(userTwoUsername)
                                            .then(userObj => {
                                                if (userObj.userID != undefined) {
                                                    assert.ok(true);
                                                } else {
                                                    assert.fail(`The recently created user with username '${userTwoUsername} was not found in the database!`)
                                                }
                                            })
                                            .catch(err => {
                                                assert.fail(err);
                                            })
                                    })
                                    .catch(err => {
                                        assert.fail(err);
                                    })
                            } else {
                                assert.fail(`The recently created user with username '${userOneUsername} was not found in the database!`)
                            }
                        })
                        .catch(err => {
                            assert.fail(err);
                        })
                })
                .catch(err => {
                    assert.fail(err);
                })
        })
});

Given('a test DB environment has been initialized to test messages', async function() {
    return db.isConnected()
        .then(isConnected => {
            assert.ok(isConnected);
        })
        .catch(err => {
            assert.fail(err);
        })
});

Given('the sender is registered', async function() {
    return UserController.userIsRegistered(userTwoUsername)
        .then(userOneIsRegistered => {
            if (userOneIsRegistered) {
                assert.ok(true);
            } else {
                assert.fail(`A user with username '${userTwoUsername}' was not found in the database!`);
            }
        })
});

Given('the receiver is registered', async function() {
    return UserController.userIsRegistered(userOneUsername)
        .then(userTwoIsRegistered => {
            if (userTwoIsRegistered) {
                assert.ok(true);
            } else {
                assert.fail(`A user with username '${userOneUsername}' was not found in the database!`);
            }
        })
});

When('a user sends a message to another user', async function() {
    // Get the userIds
    return UserController.getUser(userOneUsername)
        .then(userOne => {
            this.userOneID = userOne.userID
            UserController.getUser(userTwoUsername)
                .then(userTwo => {
                    this.userOneID = userOne.userID
                    DirectMessageController.sendMessageToUser(userTwo.userID, userOne.userID, msg)
                        .then(() => {
                            assert.ok(true);
                        })
                        .catch(err => {
                            assert.fail(err);
                        })
                })
                .catch(err => {
                    assert.fail(err);
                })
        })
        .catch(err => {
            assert.fail(err);
        })
})

Then('the message should be added to the database', async function() {
    return DirectMessageController.getMessagesBetweenUsers(this.userOneID, this.userTwoID)
        .then(messages => {
            assert.ok(messages.length > 0);
        })
        .catch(err => {
            assert.fail(err);
        })
})