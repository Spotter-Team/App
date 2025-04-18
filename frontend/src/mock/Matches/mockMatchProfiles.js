const mockMatchProfiles = [
    {
        userId: 'steve123',
        name: 'Steve',
        username: 'steve',
        avatar: require('../../mock/Matches/pfp/steve.jpg'),
        trainerBadge: true,
        buddyBadge: true,
        gymBuddies: 5,
        fitnessLevel: 2, // beginner = 1, intermediate = 2, etc..
        location: 'Gainesville, FL',
        preferredWorkout: 'HIIT, Lifting',
        availability: {
            Mon: true,
            Tue: false,
            Wed: true,
            Thu: false,
            Fri: true,
            Sat: false,
            Sun: true,
        },
        times: {
            Mon: '7-9am',
            Wed: '6-8pm',
            Fri: '5-7pm',
            Sun: '8-10am',
        },
        workoutLog: [
            {
                day: 'Mon',
                content: 'HIIT + Upper Body Strength\n • Bench press + shoulder press (4 sets each)\n • Bench press + shoulder press (4 sets each)\n • Quick stretch and foam roll cooldown'
            },
            {
                day: 'Wed',
                content: 'HIIT + Lower Body Strength\n • EMOM: KB swings, jump squats\n • Back squats + walking lunges\n • Hamstring + hip stretches'
            },
            {
                day: 'Fri',
                content: 'Full Body HIIT\n • 3-round circuit: jumps, swings, wall balls, thrusters\n • 5-min total plank challenge\n • Full body cooldown stretch'
            },
            {
                day: 'Sun',
                content: 'Core Focus + Conditioning\n • Mountain climbers, v-ups\n • Weighted sit-ups + hanging leg raises\n • 10-min incline treadmill walk cooldown'
            }
        ],
    },
    {
        userId: 'henry123',
        name: 'Henry',
        username: 'henry',
        avatar: require('../../mock/Matches/pfp/henry.jpg'),
        trainerBadge: true,
        buddyBadge: true,
        gymBuddies: 10,
        fitnessLevel: 2, // beginner = 1, intermediate = 2, etc..
        location: 'Ocala, FL',
        preferredWorkout: 'Bodybuilding',
        availability: {
            Mon: true,
            Tue: true,
            Wed: true,
            Thu: true,
            Fri: true,
            Sat: true,
            Sun: true,
        },
        times: {
            Mon: '3-5pm',
            Tue: '2-5pm',
            Wed: '5-7pm',
            Thu: '3-5pm',
            Fri: '3-5pm',
            Sat: '9-11am',
            Sun: '9-11am',
        },
        workoutLog: [
            {
                day: 'Mon',
                content: 'Chest Day\n • Barbell bench press (4x8)\n • Incline dumbbell press (3x10)\n • Cable flys finisher (3x15)\n'
            },
            {
                day: 'Tue',
                content: 'Back Blast\n • Deadlifts (4x6)\n • Lat pulldown (4x10)\n • Dumbbell rows (3x12 per side)\n'
            },
            {
                day: 'Wed',
                content: 'Leg Power\n • Squats (4x8)\n • Leg press machine (3x12)\n • Hamstring curls (3x15)\n'
            },
            {
                day: 'Thu',
                content: 'Arm Focus\n • Barbell curls (4x10)\n • Tricep rope pushdowns (4x12)\n • Preacher curls (3x12)\n'
            },
            {
                day: 'Fri',
                content: 'Shoulder Burn\n • Overhead press (4x8)\n • Lateral raises (3x15)\n • Rear delt flys (3x15)\n'
            },
            {
                day: 'Sat',
                content: 'Core Crush\n • Hanging leg raises (3x15)\n • Weighted cable crunches (4x12)\n • Plank holds (3x1 min)\n'
            },
            {
                day: 'Sun',
                content: 'Active Recovery\n • Light cardio (20–30 min)\n • Full body stretch/mobility\n • Foam rolling session'
            },
        ],
    },
    {
        userId: 'haley123',
        name: 'Haley',
        username: 'haley',
        avatar: require('../../mock/Matches/pfp/haley.jpg'),
        trainerBadge: false,
        buddyBadge: true,
        gymBuddies: 4,
        fitnessLevel: 3, // beginner = 1, intermediate = 2, etc..
        location: 'Orlando, FL',
        preferredWorkout: 'HIIT, CrossFit',
        availability: {
            Mon: true,
            Tue: true,
            Wed: true,
            Thu: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        times: {
            Mon: '8-10pm',
            Tue: '6-8pm',
            Wed: '7-9pm',
            Thu: '6-8pm',
            Fri: '5-7pm',
        },
        workoutLog: [
            {
                day: 'Mon',
                content: 'Cardio Core\n • 20-min EMOM: 10 burpees, 20 sit-ups\n • 4 rounds: mountain climbers + jump squats\n • 3 x 1-min planks\n'
            },
            {
                day: 'Tue',
                content: 'Power Circuit\n • 3 rounds: kettlebell swings, push-ups, box jumps\n • 12-9-6 reps: dumbbell thrusters, pull-ups\n • 800m run finisher\n'
            },
            {
                day: 'Wed',
                content: 'Strength Sprint\n • 5x5 deadlifts (progressive load)\n • 10-min AMRAP: 10 cleans, 10 push press\n • Row 500m sprint x 3\n'
            },
            {
                day: 'Thu',
                content: 'Tabata Burn\n • Tabata: air squats, sit-ups, jumping lunges\n • 5 rounds: wall balls + kettlebell snatch\n • Stretch & mobility cool-down\n'
            },
            {
                day: 'Fri',
                content: 'Full Send\n • 21-15-9: thrusters + burpees over bar\n • 15-min EMOM: 5 power cleans + 10 push-ups\n • Bike sprints (max effort x 3)\n'
            },
        ],
    },
    {
        userId: 'jessica123',
        name: 'Jessica',
        username: 'jessica',
        avatar: require('../../mock/Matches/pfp/jessica.jpg'),
        trainerBadge: false,
        buddyBadge: true,
        gymBuddies: 5,
        fitnessLevel: 2, // beginner = 1, intermediate = 2, etc..
        location: 'Ocala, FL',
        preferredWorkout: 'Powerlifting, Running',
        availability: {
            Mon: true,
            Tue: true,
            Wed: true,
            Thu: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        times: {
            Mon: '9am-5pm',
            Tue: '9am-5pm',
            Wed: '9am-5pm',
            Thu: '9am-5pm',
            Fri: '9am-5pm',
        },
        workoutLog: [
            {
                day: 'Mon',
                content: 'Squat Focus\n • Back squats 5x5 (heavy)\n • Pause squats 3x3\n • Easy 1-mile recovery run\n'
            },
            {
                day: 'Tue',
                content: 'Speed Run\n • 10-min warm-up jog\n • 6 x 400m sprints (90s rest)\n • Core circuit: planks, leg raises, Russian twists\n'
            },
            {
                day: 'Wed',
                content: 'Bench Power\n • Bench press 5x5 (heavy)\n • Close-grip press 4x8\n • Incline DB press 3x12\n'
            },
            {
                day: 'Thu',
                content: 'Tempo Run\n • 20–30 min tempo run (moderate-hard pace)\n • Jog cooldown\n • Hamstring + calf stretches\n'
            },
            {
                day: 'Fri',
                content: 'Deadlift Day\n • Deadlifts 5x3 (heavy)\n • Barbell rows 4x10\n • 1.5-mile easy pace run\n'
            },
        ],
    },
    {
        userId: 'joseph123',
        name: 'Joseph',
        username: 'joseph',
        avatar: require('../../mock/Matches/pfp/joseph.jpg'),
        trainerBadge: false,
        buddyBadge: true,
        gymBuddies: 4,
        fitnessLevel: 3, // beginner = 1, intermediate = 2, etc..
        location: 'Gainesville, FL',
        preferredWorkout: 'Cycling, Hiking',
        availability: {
            Mon: true,
            Tue: false,
            Wed: true,
            Thu: false,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        times: {
            Mon: '6-8pm',
            Wed: '5-7pm',
            Fri: '6-8pm',
        },
        workoutLog: [
            {
                day: 'Mon',
                content: 'Hill Climb\n • 45-min cycling with hill intervals\n • 5 x 1-min standing sprints\n • Post-ride quad & hamstring stretch\n'
            },
            {
                day: 'Wed',
                content: 'Trail Trek\n • 2–3 hour moderate hike\n • Elevation gain goal: 800–1200 ft\n • Focus on steady breathing + pacing\n'
            },
            {
                day: 'Fri',
                content: 'Endurance Ride\n • 60–90 min long-distance cycling\n • Maintain steady heart rate zone 2\n • 10-min cooldown walk + mobility\n'
            },
        ],
    },
    {
        userId: 'michael123',
        name: 'Michael',
        username: 'michael',
        avatar: require('../../mock/Matches/pfp/michael.jpg'),
        trainerBadge: false,
        buddyBadge: true,
        gymBuddies: 7,
        fitnessLevel: 4, // beginner = 1, intermediate = 2, etc..
        location: 'Gainesville, FL',
        preferredWorkout: 'Weightlifting',
        availability: {
            Mon: true,
            Tue: true,
            Wed: true,
            Thu: true,
            Fri: true,
            Sat: false,
            Sun: false,
        },
        times: {
            Mon: '7-9am',
            Tue: '5-7pm',
            Wed: '5-7pm',
            Thu: '2-4pm',
            Fri: '5-7pm',
        },
        workoutLog: [
            {
                day: 'Mon',
                content: 'Upper Push\n • Barbell bench press 4x6\n • Overhead press 3x8\n • Tricep dips 3x10\n'
            },
            {
                day: 'Tue',
                content: 'Lower Pull\n • Deadlifts 5x5 (heavy)\n • Romanian deadlifts 3x10\n • Hamstring curls 3x12\n'
            },
            {
                day: 'Wed',
                content: 'Upper Pull\n • Pull-ups 4x8 (weighted if possible)\n • Barbell rows 4x10\n • Bicep curls 3x12\n'
            },
            {
                day: 'Thu',
                content: 'Lower Push\n • Back squats 4x8\n • Walking lunges 3x20 steps\n • Calf raises 4x15\n'
            },
            {
                day: 'Fri',
                content: 'Full Body\n • Power cleans 4x3\n • Push press 4x6\n • Front squats 3x8\n'
            },
        ],
    },
    {
        userId: 'maria123',
        name: 'Maria',
        username: 'maria',
        avatar: require('../../mock/Matches/pfp/maria.jpg'),
        trainerBadge: false,
        buddyBadge: true,
        gymBuddies: 5,
        fitnessLevel: 2, // beginner = 1, intermediate = 2, etc..
        location: 'Gainesville, FL',
        preferredWorkout: 'Weightlifting',
        availability: {
            Mon: false,
            Tue: false,
            Wed: false,
            Thu: false,
            Fri: false,
            Sat: false,
            Sun: false,
        },
        times: {
            Sat: '9-11am',
            Sun: '9-11am'
        },
        workoutLog: [
            {
                day: 'Sat',
                content: 'Strength Combo\n • Deadlift + overhead press superset 4x5\n • Front squats 3x8\n • Pull-ups 3x10 (add weight if needed)\n'
            },
            {
                day: 'Sun',
                content: 'Accessory Work\n • Lateral raises + face pulls 3x15\n • Dumbbell curls + skull crushers 3x12\n • Core circuit: planks, sit-ups, leg raises\n'
            },
        ],
    },
]

export default mockMatchProfiles;