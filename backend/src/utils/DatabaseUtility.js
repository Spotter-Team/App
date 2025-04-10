const fs = require('fs').promises;
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

class DatabaseUtility {
    dbFilePath;
    dataPath;

    /** @type { Array } */
    models = [];

    constructor() {
        const localDBPath = process.env.LOCAL_DB_PATH;
        const dataPath = process.env.DATA_PATH;
        if (!localDBPath) {
            console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
            process.exit(1);
        }
        this.dbFilePath = path.join(__dirname, '../', localDBPath);

        if (!dataPath) {
            console.error(`Error: Variable DATA_PATH was not found .env file!`);
            process.exit(1);
        }
        this.dataPath = path.join(__dirname, '../', dataPath);
    }


    /**
     * ========== PUBLIC FUNCTIONS ==========
     */

    /**
     * Initializes a local SQLite3 database
     * @param {boolean} clean If an existing db file should be deleted and recreated
     * @returns A promise which resolves when the DB has been initialized and rejects on an unhandled error
     */
    initLocalDB(clean) {
        return new Promise((resolve, reject) => {
            // Check for the data directory and if it doesn't exist create it
            DatabaseUtility._checkForFile(this.dbFilePath)
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

                            // Check to see if the data directory exists
                            DatabaseUtility._checkForDirectory(this.dataPath)
                            .then(() => {
                                fs.writeFile(this.dbFilePath, '')
                                    .then(() => {
                                        resolve();
                                    })
                                    .catch(err => {
                                        reject(err);
                                    })
                            })
                            .catch(err => {
                                reject(err);
                            })
                        } else {
                            resolve();
                        }
                    })
                })
                .then(() => {
                    resolve(`The 'data' directory is in place and the 'local.db' file has been created in that directory.`);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }


    /**
     * Loads all the model files from the 'models' directory
     */
    loadModels() {
        return new Promise((resolve, reject) => {
            const sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: this.dbFilePath
            });

            // Define the 'User' model
            sequelize.define(
                'User',
                {
                    userID: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    email: {
                        type: DataTypes.TEXT,
                        allowNull: false
                    },
                    pwd: {
                        type: DataTypes.TEXT,
                        allowNull: false
                    },
                    phoneNumber: {
                        type: DataTypes.TEXT,
                    },
                    firstName: {
                        type: DataTypes.TEXT,
                    },
                    lastName: {
                        type: DataTypes.TEXT,
                    },
                    userLocation: {
                        type: DataTypes.TEXT
                    },
                    fitnessLevel: {
                        type: DataTypes.INTEGER,
                    },
                    trainerBadge: {
                        type: DataTypes.BOOLEAN
                    }
                }
            )

            // Define the 'DirectMessage' model
            sequelize.define(
                'DirectMessage',
                {
                    msgID: {
                        type: DataTypes.INTEGER,
                        autoIncrement: true,
                        primaryKey: true
                    },
                    tStamp: {
                        type: DataTypes.DATE,
                        allowNull: false
                    },
                    msg: {
                        type: DataTypes.TEXT,
                        allowNull: false
                    },
                    senderID: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: sequelize.models.User,
                            key: 'userID'
                        }
                    },
                    receiverID: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: sequelize.models.User,
                            key: 'userID'
                        }
                    }
                }
            )

            // Sync the new tables with the db
            sequelize.sync()
                .then(db => {
                    db.close()
                        .then(() => {
                            resolve(`Successfully defined the tables and synced them with the DB!`);
                        })
                        .catch(err => {
                            reject(err);
                        })
                })
                .catch(err => {
                    reject(err);
                })
        });
    }    


    /**
     * ========== INTERNAL FUNCTIONS ==========
     */


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

module.exports = DatabaseUtility;