CREATE TABLE User (
    userID INTEGER PRIMARY KEY,
    email TEXT NOT NULL,
    pwd TEXT NOT NULL,
    phoneNumber TEXT,
    firstName TEXT,
    lastName TEXT,
    userLocation LOCATION,
    fitnessLevel INTEGER,
    trainerBadge TEXT
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