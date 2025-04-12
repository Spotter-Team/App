const mockChatList = [
    {
        id: 1,
        name: 'Haley Smith',
        avatarUri: require('./pfp/haley.jpg'),
        lastMessage: {
            senderId: 'haley123',
            content: 'Great job on the deadlifts',
            type: 'text',
            timestamp: '2025-04-12T14:15:00Z'
        },
        unreadCount: 2
    }, 
    {
        id: 2,
        name: 'Jessica Anderson',
        avatarUri: require('./pfp/jessica.jpg'),
        lastMessage: {
            senderId: 'jessica123',
            content: 'Are you going to the gym tomorrow?',
            type: 'text',
            timestamp: '2025-04-11T10:04:00Z'
        },
        unreadCount: 0
    },
    {
        id: 3,
        name: 'Joseph Hernandez',
        avatarUri: require('./pfp/joseph.jpg'),
        lastMessage: {
            senderId: 'joseph123',
            content: "Yeah, I'm down!",
            type: 'text',
            timestamp: '2025-04-09T19:30:00Z'
        },
        unreadCount: 0
    }, 
    {
        id: 4,
        name: 'Michael Thomas',
        avatarUri: require('./pfp/michael.jpg'),
        lastMessage: {
            senderId: 'michael123',
            content: '/sent-image.png',
            type: 'image',
            timestamp: '2025-04-07T14:30:00Z'
        },
        unreadCount: 0
    },
    {
        id: 5,
        name: 'Maria Jones',
        avatarUri: require('./pfp/maria.jpg'),
        lastMessage: {
            senderId: 'user123',
            content: 'Next time!',
            type: 'text',
            timestamp: '2025-04-04T14:30:00Z'
        },
        unreadCount: 0
    } 
];

export default mockChatList;