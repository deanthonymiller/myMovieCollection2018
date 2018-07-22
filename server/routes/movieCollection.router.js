const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');


router.post('/',(req, res) =>{
    console.log('POST/movies/entry');
    let movie = req.body;
    const queryText = `INSERT INTO "movies" ("name", "image_path", 
    "release_date", "run_time", "genre_id")
    VALUES ($1, $2, $3, $4, $5);`;

    // INSERT INTO genre ("genre") VALUES ($1);
        pool.query(queryText, [movie.name, movie.image_path, 
        movie.release_date, movie.run_time, movie.genre_id])
        .then((results) =>{
            console.log('we made it!');
            res.sendStatus(201)
        }).catch((err) => {
            console.log('we have a error in router/POST', err);
            res.sendStatus(500);
        })
});
//movies GET
router.get('/', (req, res) => {
    console.log('GET/movies');
    const queryText =  `SELECT genre, "name", "image_path", 
    "release_date", "run_time", 
    movies."id" as "movie_id" 
    from "movies" join "genre" on "genre_id" = "genre"."id";`
    pool.query(queryText)
    .then(results => {
        res.send(results.rows);
    }).catch(err => {
        console.log('err in movies GET', err);
        res.sendStatus(500)
    })
})

router.delete('/:id',(req, res) => {
    console.log('DELETE');
    const movieId = req.params.id;
    pool.query(`DELETE FROM "movies" WHERE "id" = $1;`, [movieId])
    .then(results => {
        console.log(results);
        
        res.sendStatus(201);
    })
    .catch(err => {
        console.log('err in delete router', err);
        res.sendStatus(500);
    })
})
///////////////////////////////////////////////////////////////////////////////////////////


// router.post('/genre', (req, res) => {
//     console.log('POST/movies/genre');
//     const genre = req.body
//     const queryText =  `INSERT INTO genre ("genre")
//     VALUES ($1);`;

//     pool.query(queryText, [genre.genre])
//     .then(results =>{
//         res.send(results.rows)
//         res.sendStatus(201)
//     }).catch(err => {
//         console.log('err in genre POST', err );
//         res.sendStatus(500);
//     })
// });

// router.get('/genre', (req, res) => {
//     console.log('GET/genre');
//     const queryText = `SELECT genre.*, count(movies) as "total_movies" FROM "genre"
//     LEFT JOIN movies ON genre."id" = movies."genre_id"
//     GROUP BY genre."id";`
//     pool.query(queryText)
//     .then(results => {
//         res.send(results.rows);
//     }).catch(err => {
//         console.log('getting err in genre GET', err);
//     })
// })


 

module.exports = router;