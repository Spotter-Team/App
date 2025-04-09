CREATE TABLE User (
    userID INTEGER PRIMARY KEY,
    email TEXT NOT NULL,
    pwd TEXT NOT NULL,
    phoneNumber TEXT,
    firstName TEXT,
    lastName TEXT,
    userLocation TEXT,
    fitnessLevel INTEGER,
    trainerBadge BOOLEAN
);

CREATE TABLE TimeSlot (
    slotID INTEGER PRIMARY KEY,
    startTStamp DATETIME NOT NULL,
    endTStamp DATETIME NOT NULL,
    available BOOLEAN
);

CREATE TABLE CommunityType (
    typeID INTEGER PRIMARY KEY,
    typeName TEXT NOT NULL,
    typeDescription TEXT
);

CREATE TABLE DirectMessage (
    msgID INTEGER PRIMARY KEY,
    tStamp TEXT NOT NULL,
    msg TEXT NOT NULL,
    senderID INTEGER NOT NULL,
    receiverID INTEGER NOT NULL,
    FOREIGN KEY(senderID) REFERENCES User(userID),
    FOREIGN KEY(receiverID) REFERENCES User(userID)
);

CREATE TABLE Match (
    spotterID INTEGER,
    spottedID INTEGER,
    FOREIGN KEY(spotterID) REFERENCES User(userID),
    FOREIGN KEY(spottedID) REFERENCES User(userID)
);

CREATE TABLE Workout (
    workoutID INTEGER PRIMARY KEY,
    workoutName TEXT NOT NULL,
    workoutDescription TEXT
);

CREATE TABLE WorkoutEquipment (
    equipmentID INTEGER PRIMARY KEY,
    equipmentName TEXT NOT NULL,
    equipmentDescription TEXT
);

CREATE TABLE RequiredEquipment (
    workoutID INTEGER,
    equipmentID INTEGER,
    FOREIGN KEY(workoutID) REFERENCES Workout(workoutID),
    FOREIGN KEY(equipmentID) REFERENCES WorkoutEquipment(equipmentID)
);

CREATE TABLE Meetup (
    meetupID INTEGER PRIMARY KEY,
    meetupLocation TEXT NOT NULL,
    meetupTime INTEGER NOT NULL,
    FOREIGN KEY(meetupTime) REFERENCES TimeSlot(slotID)
);

CREATE TABLE Availability (
    userID INTEGER,
    tSlotID INTEGER,
    FOREIGN KEY(userID) REFERENCES User(userID),
    FOREIGN KEY(tSlotID) REFERENCES TimeSlot(slotID)
);

CREATE TABLE Community (
    cID INTEGER PRIMARY KEY,
    cName TEXT NOT NULL,
    typeID INTEGER,
    cLocation TEXT,
    numMembers INTEGER,
    isPublic BOOLEAN,
    FOREIGN KEY(typeID) REFERENCES CommunityType(typeID)
);

CREATE TABLE MemberOf (
    userID INTEGER,
    communityID INTEGER,
    FOREIGN KEY(userID) REFERENCES User(userID),
    FOREIGN KEY(communityID) REFERENCES Community(cID)
);

CREATE TABLE GoesTo (
    userID INTEGER,
    gymID INTEGER,
    FOREIGN KEY(userID) REFERENCES User(userID),
    FOREIGN KEY(gymID) REFERENCES Gym(gymID)
);

CREATE TABLE Gym (
    gymID INTEGER PRIMARY KEY,
    gymName TEXT NOT NULL,
    gymLocation LOCATION NOT NULL,
    gymAddress TEXT,
    gymURL TEXT
);

CREATE TABLE UserReport (
    reportID INTEGER PRIMARY KEY,
    userID INTEGER,
    reporterID INTEGER,
    reportTypeID INTEGER,
    reportDetail TEXT,
    FOREIGN KEY(userID) REFERENCES User(userID),
    FOREIGN KEY(reporterID) REFERENCES User(userID),
    FOREIGN KEY(reportTypeID) REFERENCES UserReportType(reportTypeID)
);

CREATE TABLE UserReportType (
    reportTypeID INTEGER PRIMARY KEY,
    reportTypeName TEXT NOT NULL,
    reportTypeDescription TEXT
);

CREATE TABLE Blocked (
    userID INTEGER,
    blockedBy INTEGER,
    FOREIGN KEY(userID) REFERENCES User(userID),
    FOREIGN KEY(blockedBy) REFERENCES User(userID)
)