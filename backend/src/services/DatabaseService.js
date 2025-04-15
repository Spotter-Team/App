const fs = require('fs').promises;
const path = require('path');
const { Sequelize } = require('sequelize');

// Import common sequelize config
const sequelize = require('../models/sequelize');
const {
    Availability,
    Blocked,
    Community, 
    CommunityType,
    DirectMessage,
    GoesTo,
    Gym,
    Match,
    Meetup,
    MemberOf,
    RequiredEquipment,
    TimeSlot,
    User,
    UserReport,
    UserReportType,
    Workout,
    WorkoutEquipment
} = require('../models/schema');

class DatabaseService {
    /** CLASS PROPERTIES */
    /** @type { Sequelize } */
    sequelize;
    /** @type { string } */
    dbFilePath;
    /** @type { string } */
    dataPath;

    /** MODELS */
    /** @type { Availability } */
    availability;
    /** @type { Blocked } */
    blocked;
    /** @type { Community } */
    community;
    /** @type { CommunityType } */
    communityType;
    /** @type { DirectMessage } */
    directMessage;
    /** @type { GoesTo } */
    goesTo;
    /** @type { Gym } */
    gym;
    /** @type { Match } */
    match;
    /** @type { Meetup } */
    meetup;
    /** @type { MemberOf } */
    memberOf;
    /** @type { RequiredEquipment } */
    requiredEquipment;
    /** @type { TimeSlot } */
    timeSlot;
    /** @type { User } */
    user;
    /** @type { UserReport } */
    userReport;
    /** @type { UserReportType } */
    userReportType;
    /** @type { Workout } */
    workout;
    /** @type { WorkoutEquipment } */
    workoutEquipment;

    constructor() {
        this.sequelize = sequelize;
        const localDBPath = process.env.LOCAL_DB_PATH;
        const dataPath = process.env.DATA_PATH;
        if (!localDBPath) {
            console.error(`Error: Variable LOCAL_DB_PATH was not found .env file!`);
            process.exit(1);
        }
        this.dbFilePath = path.join(__dirname, '../', '../', localDBPath);

        if (!dataPath) {
            console.error(`Error: Variable DATA_PATH was not found .env file!`);
            process.exit(1);
        }
        this.dataPath = path.join(__dirname, '../', '../', dataPath);
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
            DatabaseService._checkForFile(this.dbFilePath)
                .then(dbFileExists => {
                    // If the clean parameter was passed, delete the local.db file
                    return new Promise((resolve, reject) => {
                        if (clean && dbFileExists) {
                            fs.unlink(this.dbFilePath)
                                .then(() => {
                                    resolve(dbFileExists);
                                })
                                .catch(err => {
                                    reject(err);
                                })
                        } else {
                            resolve(dbFileExists);
                        }
                    });
                })
                .then(dbFileExists => {
                    return new Promise((resolve, reject) => {
                        // If the local.db file doesn't exist or if the clean parameter was passed
                        if (!dbFileExists || clean) {
                            // Check to see if the data directory exists
                            DatabaseService._checkForDirectory(this.dataPath)
                                .then(() => {
                                    fs.writeFile(this.dbFilePath, '')
                                        .then(() => {
                                            resolve(`A .db file was created at '${this.dbFilePath}'. The local db environment has been created!`);
                                        })
                                        .catch(err => {
                                            reject(err);
                                        })
                                })
                                .catch(err => {
                                    reject(err);
                                })
                        } else {
                            resolve(`A .db file at '${this.dbFilePath}' already existed and the clean parameter was not passed to the function. The local db environment was already setup!`);
                        }
                    })
                })
                .then(msg => {
                    return this.loadModels()
                })
                .then(msg => {
                    resolve(msg);
                })
                .catch(err => {
                    reject(err)
                })
        });
    }


    /**
     * Loads all the model files from the 'models' directory
     */
    loadModels() {
        return new Promise(async (resolve, reject) => {
            // Initialize the models
            /** MODELS */
            this.availability = Availability;
            this.blocked = Blocked;
            this.community = Community;
            this.communityType = CommunityType;
            this.directMessage = DirectMessage;
            this.goesTo = GoesTo;
            this.gym = Gym;
            this.match = Match;
            this.meetup = Meetup;
            this.memberOf = MemberOf;
            this.requiredEquipment = RequiredEquipment;
            this.timeSlot = TimeSlot;
            this.user = User;
            this.userReport = UserReport;
            this.userReportType = UserReportType;
            this.workout = Workout;
            this.workoutEquipment = WorkoutEquipment;

            // Sync the new tables with the db
            sequelize.sync()
                .then(() => {
                    resolve(`Successfully defined the tables and synced them with the DB!`);
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
                                resolve(`Directory at path '${dirPath}' was successfully made!`);
                            })
                            .catch(err => {
                                reject(err);
                            })
                    }
                })
                .catch(err => {
                    if (err.code = 'ENOENT') {
                        fs.mkdir(dirPath)
                            .then(() => {
                                resolve(`Directory at path '${dirPath}' was successfully made!`);
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
                    resolve(contents);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

}

module.exports = DatabaseService;