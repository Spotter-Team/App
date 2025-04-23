const jwt = require('jsonwebtoken');

// Load JWT_secret
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    console.error(`Error: Variable JWT_SECRET was not found .env file!`);
    process.exit(1);
}

const auth = (req, res, next) => {
    const token = req.header('Authorization');
    
    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    try {
        const decode = jwt.verify(token, jwtSecret);
        req.userID = decode.userID;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Invalid Token' });
    }
};

module.exports = auth;