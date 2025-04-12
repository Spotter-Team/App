const mockChatList = [
    {
        id: 1,
        name: 'Haley Smith',
        avatarUri: require('./pfp/haley.png'),
        lastMessage: {
            senderId: 'haley123',
            content: 'Great job on the deadlifts',
            type: 'text',
            timestamp: '2025-04-11T14:15:00Z'
        },
        unreadCount: 2
    }, 
    {
        id: 2,
        name: 'Jessica Johnson',
        avatarUri: require('./pfp/jessica.png'),
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
        name: 'Joseph Williams',
        avatarUri: require('./pfp/joseph.png'),
        lastMessage: {
            senderId: 'user123',
            content: "Yeah, I'm down!",
            type: 'text',
            timestamp: '2025-04-10T19:30:00Z'
        },
        unreadCount: 0
    }, 
    {
        id: 4,
        name: 'Michael Brown',
        avatarUri: require('./pfp/michael.png'),
        lastMessage: {
            senderId: 'michael123',
            content: '/sent-image.png',
            type: 'image',
            timestamp: '2025-04-10T14:30:00Z'
        },
        unreadCount: 0
    } 
];

export default mockChatList;