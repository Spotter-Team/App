const { User } = require('../models/User');
const { Gym } = require('../models/Gym');
const { GoesTo } = require('../models/GoesTo');
const { Op } = require('sequelize');
const { Match } = require('../models/Match');

async function getUserGymIDs(userID) {
    const relations = await GoesTo.findAll({ where: { userID } });
    return relations.map(rel => rel.gymID);
}

async function calculateMatchScore(user, other, userGyms, otherGyms) {
    let score = 0;

    // +6 if user shares any gym
    const sharedGym = userGyms.some(id => otherGyms.includes(id));
    if (sharedGym) score += 6;

    // +3 if same userLocation (city)
    if (user.userLocation && other.userLocation && user.userLocation === other.userLocation) {
        score += 3;
    }

    // +2 per overlapping available day
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    days.forEach(day => {
        if (user.availability?.[day] && other.availability?.[day]) {
            score += 2;
        }
    });

    // +1 if fitness level is similar
    if (Math.abs(user.fitnessLevel - other.fitnessLevel) <= 1) score += 1;

    return score;
}

async function getMatchesForUser(userID) {
    const user = await User.findByPk(userID);
    const userGyms = await getUserGymIDs(userID);

    const otherUsers = await User.findAll({
        where: { userID: { [Op.ne]: userID } }
    });

    const matches = await Promise.all(otherUsers.map(async (other) => {
        const otherGyms = await getUserGymIDs(other.userID);
        const matchScore = await calculateMatchScore(user, other, userGyms, otherGyms);
        
        if (matchScore > 0) {
            await Match.create({
                spotterID: user.userID,
                spottedID: other.userID,
                matchScore
            });
        }
        
        return {
            user: other,
            matchScore
        };
    }));

    return matches
        .filter(match => match.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore);
}


module.exports = { getMatchesForUser };