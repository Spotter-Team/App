const { userSchema, User} = require('./User');
const { availabilitySchema, Availability } = require('./Availability');
const { blockedSchema, Blocked } = require('./Blocked');
const { communitySchema, Community } = require('./Community');
const { communityTypeSchema, CommunityType } = require('./CommunityType');
const { directMessageSchema, DirectMessage } = require('./DirectMessage');
const { goesToSchema, GoesTo } = require('./GoesTo');
const { gymSchema, Gym } = require('./Gym');
const { matchSchema, Match } = require('./Match');
const { meetupSchema, Meetup } = require('./Meetup');
const { memberOfSchema, MemberOf } = require('./MemberOf');
const { requiredEquipmentSchema, RequiredEquipment } = require('./RequiredEquipment');
const { timeSlotSchema, TimeSlot } = require('./TimeSlot');
const { userReportSchema, UserReport } = require('./UserReport');
const { userReportTypeSchema, UserReportType } = require('./UserReportType');
const { workoutSchema, Workout } = require('./Workout');
const { workoutEquipmentSchema, WorkoutEquipment } = require('./WorkoutEquipment');

module.exports = {
    userSchema,
    User,
    availabilitySchema,
    Availability,
    blockedSchema,
    Blocked,
    communitySchema,
    Community,
    communityTypeSchema,
    CommunityType,
    directMessageSchema,
    DirectMessage,
    goesToSchema,
    GoesTo,
    gymSchema,
    Gym,
    matchSchema,
    Match, 
    meetupSchema,
    Meetup,
    memberOfSchema,
    MemberOf,
    requiredEquipmentSchema,
    RequiredEquipment,
    timeSlotSchema,
    TimeSlot,
    userReportSchema,
    UserReport,
    userReportTypeSchema,
    UserReportType,
    workoutSchema,
    Workout,
    workoutEquipmentSchema,
    WorkoutEquipment
};