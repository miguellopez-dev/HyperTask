export const TASKS = [
    {
        id: 0,
        name: 'Take out trash',
        priorty: 'Medium',
        steps: [
            {
                1: 'Get new trash bags from pantry',
                2: 'Remove exsiting trash bag from trash bin',
                3: 'Put new trash bag in trash bin',
                4: 'Take trash outside',
            },
        ],
        location: 'Home',
        date: new Date().toLocaleDateString('en-US'),
        utility: '',
    },
    {
        id: 1,
        name: 'Make navigation for app',
        priorty: 'High',
        steps: [{}],
        location: 'Home',
        date: new Date().toLocaleDateString('en-US'),
        utility: 'Computer',
    },
    {
        id: 2,
        name: 'Buy new desk',
        priorty: 'low',
        steps: [
            {
                1: 'Research new standing desk',
                2: 'Discuss with Wife',
                3: 'Buy!',
            },
        ],
        location: 'Home',
        date: new Date().toLocaleDateString('en-US'),
        utility: 'Phone',
    },
];
