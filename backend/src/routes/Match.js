const express = require('express');
const router = express.Router();
const { getMatchesForUser } = require('../services/matchingService');

router.get('/:userID', (req, res) => {
    getMatchesForUser(req.params.userID)
        .then(matches => res.json(matches))
        .catch(err => res.status(500).json({ message: 'Error finding matches', error: err }));
});

module.exports = router;

