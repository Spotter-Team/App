const fs = require('fs').promises;
require('@dotenvx/dotenvx').config();
const path = require('path');

const DatabaseService = require('../services/DatabaseService');
const pathToSampleData = './sample-data';

const db = new DatabaseService();

async function importFilesSequentially(jsonFiles, pathToSampleData) {
    for (const fileName of jsonFiles) {
        const filePath = path.join(__dirname, pathToSampleData, '/', fileName);
        
        console.log(`Importing file at path '${filePath}'`);
        
        try {
            await db.bulkImport(filePath);
            console.log(`Completed bulk import process for file '${fileName}'!`);
        } catch (err) {
            console.error(`Error importing file '${fileName}':`, err);
        }
    }
}
    

const jsonFiles = [ 'Users.json', 'DirectMessages.json' ];

importFilesSequentially(jsonFiles, pathToSampleData)