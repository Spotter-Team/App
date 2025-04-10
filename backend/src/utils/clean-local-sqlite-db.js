require('@dotenvx/dotenvx').config();

const DatabaseUtility = require('./DatabaseUtility');

// Initialize the tables
const dbUtility = new DatabaseUtility();
dbUtility.initLocalDB(true)
    .then(msg => {
        console.log(msg);

        // Define the tables
        dbUtility.loadModels()
            .then(msg => {
                console.log(msg);
            })
            .catch(err => {
                console.error('Database setup failed:', err);
            })
    })
    .catch(err => {
        console.error('Database setup failed:', err);
    })