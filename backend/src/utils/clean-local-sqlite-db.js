const path = require('path');
const DatabaseService = require('../services/DatabaseService');

const dataDir = path.join(__dirname, '../data');
const sqlCmdsDir = path.join(__dirname, './sql');

// Create an instance of the DatabaseService
const dbService = new DatabaseService(dataDir, sqlCmdsDir);

dbService.initDB(true)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.error('Database setup failed:', err);
    });