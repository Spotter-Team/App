const { userSchema, User} = require('./User');
const { availabilitySchema, Availability } = require('./Availability');
const { blockedSchema, Blocked } = require('./Blocked');
const { communitySchema, Community } = require('./Community');

module.exports = {
    userSchema,
    User,
    availabilitySchema,
    Availability,
    blockedSchema,
    Blocked,
    communitySchema,
    Community
};