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
            },
            {
                id: 'msg2',
                senderId: 'haley123',
                content: "Hey! I'd love to. What are your fitness goals?",
                type: 'text',
            },
            {
                id: 'msg3',
                senderId: 'user123',
                content: "Building upper body!",
                type: 'text',
            },
            {
                id: 'msg4',
                senderId: 'haley123',
                content: 'Want to workout at Southwest 5PM tomorrow?',
                type: 'text',
            },
            {
                id: 'msg5',
                senderId: 'user123',
                content: 'Yup!',
                type: 'text',
            },
            {
                id: 'msg6',
                senderId: 'haley123',
                content: 'Sounds good, see you then!',
                type: 'text',
            },
            {
                id: 'msg7',
                senderId: 'haley123',
                content: 'Great job on the deadlifts',
                type: 'text',
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
            },
            {
                id: 'msg2',
                senderId: 'jessica123',
                content: 'Are you going to the gym tomorrow?',
                type: 'text',
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
            },
            {
                id: 'msg2',
                senderId: 'joseph123',
                content: "Hey! What's up?",
                type: 'text',
            },
            {
                id: 'msg3',
                senderId: 'user123',
                content: 'Wanna hit the gym tomorrow?',
                type: 'text',
            },
            {
                id: 'msg4',
                senderId: 'joseph123',
                content: "Yeah, I'm down!",
                type: 'text',
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
            },
            {
                id: 'msg2',
                senderId: 'user123',
                content: 'Hey, just wondering, what creatine do you recommend?',
                type: 'text',
            },
            {
                id: 'msg3',
                senderId: 'michael123',
                content: "I'll send you a screenshot!",
                type: 'text',
            },
            {
                id: 'msg4',
                senderId: 'michael123',
                content: require('./sent-image.png'),
                type: 'image',
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
            },
            {
                id: 'msg2',
                senderId: 'user123',
                content: 'Next time!',
                type: 'text',
            },
        ]
    },
];

export default mockChat;