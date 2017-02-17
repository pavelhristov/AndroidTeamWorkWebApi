'use strict';
const express = require('express');
const app = require('./config/application')();
const port = process.env.PORT || 3001;

let superheroes = [{
        id: '1',
        name: 'Batman',
        secretIdentity: 'Bruce Wayne',
        imgUrl: 'http://www.dpaddbags.com/blog/wp-content/uploads/2012/09/144-batman-jim-lee2-300x300.jpeg'
    },
    {
        id: '2',
        name: 'Iron man',
        secretIdentity: 'Tony Stark',
        imgUrl: 'https://pbs.twimg.com/profile_images/551491701878296576/OeyVF2n7_400x400.jpeg'
    },
    {
        id: '3',
        name: 'Deadpool',
        secretIdentity: 'Wade Wilson',
        imgUrl: 'http://www.honcho-sfx.com/blog/wp-content/uploads/2016/02/Deadpool-300x300.jpg'
    },
    {
        id: '4',
        name: 'Thor',
        secretIdentity: 'Thor',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/originals/ec/02/20/ec0220df313d8ec56725d6653e81e7d4.jpg'
    },
    {
        id: '5',
        name: 'Spider-man',
        secretIdentity: 'Pesho Parker',
        imgUrl: 'http://minisites.com/images/spidermancartoons.jpg'
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

let router = express.Router();
router
    .get('/superheroes', (req, res) => {
        res.status(200).json(superheroes);
    })
    .get('/superheroes/search/:pattern', (req, res) => {
        let pattern = req.params.pattern.toLocaleLowerCase();
        let filteredSuperheroes = superheroes.filter(
            x => x.name.toLocaleLowerCase().indexOf(pattern) > -1 ||
            x.secretIdentity.toLocaleLowerCase().indexOf(pattern) > -1);

        res.status(200).json(filteredSuperheroes);
    })
    .get('/factions', (req, res) => {
        res.status(200).json(factions);
    });

app.use('/api', router);

app.listen(port, () => console.log(`Application listen on port ${port}`));