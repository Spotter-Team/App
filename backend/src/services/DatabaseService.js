const fs = require('fs').promises;
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

class DatabaseService {
    dataDir;
    sqlCmdDir;
    dbFilePath;
    schemaFilePath;
    tableChecksFilePath;
    db;

    constructor(dataDir, sqlCmdDir) {
        this.dataDir = dataDir;
        this.sqlCmdDir = sqlCmdDir;
        this.dbFilePath = path.join(this.dataDir, 'local.db');
        this.schemaFilePath = path.join(this.sqlCmdDir, 'schema.sql');
        this.tableChecksFilePath = path.join(this.sqlCmdDir, 'table-checks.sql');
    }


    /**
     * ========== PUBLIC FUNCTIONS ==========
     */

    /**
     * Initializes a local SQLite3 database
     * @param {boolean} clean If an existing db file should be deleted and recreated
     * @returns A promise which resolves when the DB has been initialized and rejects on an unhandled error
     */
    initDB(clean) {
        return new Promise((resolve, reject) => {
            // Check for the data directory and if it doesn't exist create it
            DatabaseService._checkForDirectory(this.dataDir)
                .then(() => {
                    // Check to see if the schema.sql file is accessible
                    return DatabaseService._checkForFile(this.schemaFilePath);
                })
                .then(schemaFileExists => {
                    if (schemaFileExists) {
                        // Check to see if the local.db file is accessible
                        return DatabaseService._checkForFile(this.dbFilePath);
                    } else {
                        reject(`Could not init the database since the schema.sql file was not found in the 'utils/sql' directory!`);
                    }
                })
                .then(dbFileExists => {
                    return new Promise((resolve, reject) => {
                        // If the clean parameter was passed, delete the local.db file
                        if (clean && dbFileExists) {
                            console.log("An existing 'local.db' file was found and the 'clean' parameter was passed to the function. The existing 'local.db' file will be deleted!")
                            fs.unlink(this.dbFilePath)
                                .then(() => {
                                    console.log("Successfully removed the existing 'local.db' file!");
                                })
                                .catch(err => {
                                    reject(err);
                                })
                        }

                        // If the local.db file doesn't exist or if the clean parameter was passed
                        if (!dbFileExists || clean) {
                            console.log(`The 'local.db' file does not exist! It will be created!`);
                            fs.writeFile(this.dbFilePath, '')
                                .then(() => {
                                    console.log("The 'local.db' file was successfully created!")
                                    resolve(true)
                                })
                                .catch(err => {
                                    reject(err);
                                })
                        } else {
                            resolve(false);
                        }
                    })
                })
                .then(continueSetup => {
                    // Get the SQL commands to setup the tables
                    if (continueSetup) {
                        return this._openDBConnection();
                    } else {
                        resolve(`A file named 'local.db' exists and the 'clean' parameter was not passed to the function. No additional checks will be performed to validate the database`);
                    }
                })
                .then(() => {
                    return this._setupTables()
                })
                .then(() => {
                    resolve("Database setup completed successfully!");
                })
                .catch(err => {
                    reject(err);
                })
        }) 
    }


    /**
     * ========== INTERNAL FUNCTIONS ==========
     */

    /**
     * An internal function that opens a connection to a local DB
     * @returns A Promise which resolves if the DB connection is successfully made and rejects for any other unhandled error
     */
    _openDBConnection(reconnect) {
        return new Promise((resolve, reject) => {
            if (this.db === undefined || reconnect) {
                this.db = new sqlite3.Database(this.dbFilePath, err => {
                    if (err) {
                        reject(err);
                    }
    
                    console.log(`Successfully opened the db connection!`);
                    resolve();
                })
            } else {
                console.log(`A DB connection was already open an the reconnect parameter was not passed! The connections were not modified!`);
                resolve();
            }
        })
    }

    /**
     * Closes the connection to the local DB if it's open
     * @returns A Promise which resolves if the DB connection is closed
     */
    _closeDBConnection() {
        return new Promise((resolve, reject) => {
            if (this.db === undefined) {
                console.log(`There is no open connection to a local DB! A connection cannot be closed!`)
                resolve();
            } else {
                this.db.close(err => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve();
                    }
                })
            }
        })
    }

    _setupTables() {
        return new Promise((resolve, reject) => {
            DatabaseService._getFileContents(this.schemaFilePath)
                .then(sqlCommands => {
                    // Run the SQL commands on the DB
                    this.db.exec(sqlCommands, err => {
                        if (err) {
                            reject(err);
                        } else {
                            console.log(`Successfully created the tables in the local DB!`);
                            resolve();
                        }
                    })
                })
                .catch(err => {
                    reject(err);
                })
        })
    }


    /**
     * ========== STATIC INTERNAL FUNCTIONS ==========
     */

    /**
     * Checks for a file and if it doesn't exist it's created
     * @param {path} filePath - The path to the file to check
     * @returns A Promise which resolves if the files exists and rejects if there is an error checking for the file of creating it
     */
    static _checkForFile(filePath) {
        return new Promise((resolve, reject) => {
            fs.access(filePath)
                .then(() => {
                    console.log(`The file at path '${filePath} was accessible!'`);
                    resolve(true);
                })
                .catch(err => {
                    if (err.code == 'ENOENT') {
                        resolve(false);
                    } else {
                        console.error(err);
                        reject(err);
                    }
                })
        });
    }

    /**
     * Checks to see if a directory exists and if it doesn't it creates it
     * @param {path} dirPath 
     * @returns A Promise which resolves if the directory is in place and rejects on any unhandled errors
     */
    static _checkForDirectory(dirPath) {
        return new Promise((resolve, reject) => {
            fs.stat(dirPath)
                .then(stats => {
                    if (stats.isDirectory()) {
                        resolve();
                    } else if (stats.isFile()) {
                        reject(`The passed path '${dirPath}' is a file, not a directory!`);
                    } else {
                        fs.mkdir(dirPath)
                            .then(() => {
                                console.log(`Directory at path '${dirPath}' was successfully made!`)
                                resolve();
                            })
                            .catch(err => {
                                reject(err);
                            })
                    }
                })
                .catch(err => {
                    if (err.code = 'ENOENT') {
                        console.log(`The directory '${dirPath}' did not exist! The directory will be created!`)
                        fs.mkdir(dirPath)
                            .then(() => {
                                console.log(`Directory at path '${dirPath}' was successfully made!`)
                                resolve();
                            })
                            .catch(err => {
                                reject(err);
                            })
                    } else {
                        reject(err);
                    }
                })
        })
    }

    /**
     * Gets the contents from a file
     * @param {path} filePath The path to the file to read
     * @returns A Promise which resolves with the contents of the file and rejects if there is any other unhandled error
     */
    static _getFileContents(filePath) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8')
                .then(contents => {
                    console.log(`Successfully read the contents from file '${filePath}'!`);
                    resolve(contents);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

}

module.exports = DatabaseService;