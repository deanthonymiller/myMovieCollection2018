const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT =process.env.PORT || 3000;


const movieCollectionRouter = require('./routes/movieCollection.router');


app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/movies', movieCollectionRouter);






app.listen(PORT, () => {
    console.log(`Now listening on port:, ${PORT}`);
});