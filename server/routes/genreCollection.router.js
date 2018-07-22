const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');


router.post('/', (req, res) => {
    console.log('POST/movies/genre');
    const genre = req.body
    const queryText =  `INSERT INTO genre ("genre")
    VALUES ($1);`;

    pool.query(queryText, [genre.genre])
    .then(results =>{
        res.send(results.rows)
        res.sendStatus(201)
    }).catch(err => {
        console.log('err in genre POST', err );
        res.sendStatus(500);
    })
});

router.get('/', (req, res) => {
    console.log('GET/genre');
    const queryText = `SELECT genre.*, count(movies) as "total_movies" FROM "genre"
    LEFT JOIN movies ON genre."id" = movies."genre_id"
    GROUP BY genre."id";`
    pool.query(queryText)
    .then(results => {
        res.send(results.rows);
    }).catch(err => {
        console.log('getting err in genre GET', err);
    })
})

module.exports = router;