const mockChat = [
    {
        id: 1,
        name: 'Haley Smith',
        avatarUri: require('./pfp/haley.jpg'),
        messages: [
            {
                id: 'msg1',
                senderId: 'user123',
                content: 'Hey Haley, I need a gym buddy!',
                type: 'text',
                timestamp: '2025-04-10T16:03:00Z',
            },
            {
                id: 'msg2',
                senderId: 'haley123',
                content: "Hey! I'd love to. What are your fitness goals?",
                type: 'text',
                timestamp: '2025-04-10T16:05:12Z',
            },
            {
                id: 'msg3',
                senderId: 'user123',
                content: "Building upper body!",
                type: 'text',
                timestamp: '2025-04-10T16:06:45Z',
            },
            {
                id: 'msg4',
                senderId: 'haley123',
                content: 'Want to workout at Southwest 5PM tomorrow?',
                type: 'text',
                timestamp: '2025-04-10T16:08:30Z',
            },
            {
                id: 'msg5',
                senderId: 'user123',
                content: 'Yup!',
                type: 'text',
                timestamp: '2025-04-10T16:09:10Z',
            },
            {
                id: 'msg6',
                senderId: 'haley123',
                content: 'Sounds good, see you then!',
                type: 'text',
                timestamp: '2025-04-10T16:09:45Z',
            },
            {
                id: 'msg7',
                senderId: 'haley123',
                content: 'Great job on the deadlifts',
                type: 'text',
                timestamp: '2025-04-12T14:15:00Z',
            },
        ]
    },
    {
        id: 2,
        name: 'Jessica Anderson',
        avatarUri: require('./pfp/jessica.jpg'),
        messages: [
            {
                id: 'msg1',
                senderId: 'user123',
                content: 'Hey, want to workout?',
                type: 'text',
                timestamp: '2025-04-11T10:03:00Z',
            },
            {
                id: 'msg2',
                senderId: 'jessica123',
                content: 'Are you going to the gym tomorrow?',
                type: 'text',
                timestamp: '2025-04-11T10:04:00Z',
            },
        ]
    },
    {
        id: 3,
        name: 'Joseph Hernandez',
        avatarUri: require('./pfp/joseph.jpg'),
        messages: [
            {
                id: 'msg1',
                senderId: 'user123',
                content: 'Hi Joseph!',
                type: 'text',
                timestamp: '2025-04-09T19:28:00Z',
            },
            {
                id: 'msg2',
                senderId: 'joseph123',
                content: "Hey! What's up?",
                type: 'text',
                timestamp: '2025-04-09T19:28:30Z',
            },
            {
                id: 'msg3',
                senderId: 'user123',
                content: 'Wanna hit the gym tomorrow?',
                type: 'text',
                timestamp: '2025-04-09T19:29:00Z',
            },
            {
                id: 'msg4',
                senderId: 'joseph123',
                content: "Yeah, I'm down!",
                type: 'text',
                timestamp: '2025-04-09T19:30:00Z',
            },
        ]
    },
    {
        id: 4,
        name: 'Michael Thomas',
        avatarUri: require('./pfp/michael.jpg'),
        messages: [
            {
                id: 'msg1',
                senderId: 'michael123',
                content: 'Hey!',
                type: 'text',
                timestamp: '2025-04-07T14:28:00Z',
            },
            {
                id: 'msg2',
                senderId: 'user123',
                content: 'Hey, just wondering, what creatine do you recommend?',
                type: 'text',
                timestamp: '2025-04-07T14:29:00Z',
            },
            {
                id: 'msg3',
                senderId: 'michael123',
                content: "I'll send you a screenshot!",
                type: 'text',
                timestamp: '2025-04-07T14:29:30Z',
            },
            {
                id: 'msg4',
                senderId: 'michael123',
                content: require('./sent-image.png'),
                type: 'image',
                timestamp: '2025-04-07T14:30:00Z',
            },
        ]
    },
    {
        id: 5,
        name: 'Maria Jones',
        avatarUri: require('./pfp/maria.jpg'),
        messages: [
            {
                id: 'msg1',
                senderId: 'maria123',
                content: 'Hey, wanna workout!',
                type: 'text',
                timestamp: '2025-04-04T14:29:00Z',
            },
            {
                id: 'msg2',
                senderId: 'user123',
                content: 'Next time!',
                type: 'text',
                timestamp: '2025-04-04T14:30:00Z',
            },
        ]
    },
];

export default mockChat;