'use strict';

const app = require('./config/application')();
const port = process.env.PORT || 3001;

let superheroes = [{
        id: '1',
        name: 'Batman',
        secretIdentity: 'Bruce Wayne',
    },
    {
        id: '2',
        name: 'Iron man',
        secretIdentity: 'Tony Stark',
    },
    {
        id: '3',
        name: 'Deadpool',
        secretIdentity: 'Wade Wilson',
    },
    {
        id: '4',
        name: 'Thor',
        secretIdentity: 'Thor',
    },
    {
        id: '5',
        name: 'Spider-man',
        secretIdentity: 'Pesho Parker'
    }
];

let factions = [{
        id: '1',
        name: 'Avengers'
    },
    {
        id: '2',
        name: 'Justice League'
    },
    {
        id: '3',
        name: 'X-men'
    }
];


app.use('/api/superheroes', (req, res) => {
    res.status(200).json(superheroes);
}).use('/api/factions', (req, res) => {
    res.status(200).json(factions);
});

app.listen(port, () => console.log(`Application listen on port ${port}`));