const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');


router.post('/entry',(req, res) =>{
    console.log('POST/movies/entry');
    let movie = req.body;
    const queryText = `INSERT INTO "movies" ("name", "image_path", 
    "release_date", "run_time", "genre_id")
    VALUES ($1, $2, $3, $4, $5);`;

    // INSERT INTO genre ("genre") VALUES ($1);
    pool.query(queryText, [movie.name, movie.image_path, 
        movie.release_date, movie.run_time, movie.genre])
        .then((results) =>{
            console.log('we made it!');
            res.sendStatus(201)
        }).catch((err) => {
            console.log('we have a error in router/POST', err);
            res.sendStatus(500);
        })
});
//movies GET
router.get('/entry', (req, res) => {
    console.log('GET/movies');
    const queryText =  `SELECT genre, "name", "image_path", "release_date", "run_time" 
    FROM "movies" JOIN "genre" ON "movies"."id" = "movies"."id";`
    pool.query(queryText)
    .then(results => {
        res.send(results.rows);
    }).catch(err => {
        console.log('err in movies GET', err);
        res.sendStatus(500)
    })
})
///////////////////////////////////////////////////////////////////////////////////////////


router.post('/genre', (req, res) => {
    console.log('POST/movies/genre');
    const genres = req.body
    const queryText =  `INSERT INTO "genre" ("genre")
    VALUES ($1);`;

    pool.query(queryText, [genres.genre])
    .then(results =>{
        res.send(results.rows)
        res.sendStatus(201)
    }).catch(err => {
        console.log('err in genre POST', err );
        res.sendStatus(500);
    })
});

router.get('/genre', (req, res) => {
    console.log('GET/genre');
    const queryText = `select count(*) as "total_movies", "genre" FROM "genre"
    GROUP BY genre."genre";`
    pool.query(queryText)
    .then(results => {
        res.send(results.rows);
    }).catch(err => {
        console.log('getting err in genre GET', err);
    })
})


 

module.exports = router;