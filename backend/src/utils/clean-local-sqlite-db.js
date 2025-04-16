require('@dotenvx/dotenvx').config();

const DatabaseService = require('../services/DatabaseService');

// Initialize the tables
const dbSrv = new DatabaseService();
dbSrv.initLocalDB(true)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.error('Database setup failed:', err);
    })