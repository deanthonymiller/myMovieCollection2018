app.service('MovieCollectionService', ['$http', function($http){
    console.log('MovieCollectionService Started');
    
    let self = this;

    self.addedMovies = {
        list:[]
    }
    
    self.genreOfMovies = {
        list:[]
    }
/////////////////////////////////////////

    //POST
    self.addMovies = function(movieToAdd){
        console.log('In Add movie to database');
        $http({
            method:'POST',
            url: '/movies',
            data: movieToAdd
        }).then(function(res){
            console.log(res);
            self.getMovies();
            self.getGenre();
        }).catch(function(err){
            console.log('We have a error in the POST addMovies request', err);
            
        })
    }
    //http://www.omdbapi.com/?i=tt3896198&apikey=73341b64
   // https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=501f5b09429395eef64b451eeaec47e6&limit=1`)
// get to MoviesAPi
    // self.getMovieApi = function(movie){
    //     console.log('in movie api');
    //    $http.get(`
    //    https://api.themoviedb.org/3/movie/${movie}/images?language=en-US&api_key=501f5b09429395eef64b451eeaec47e6`)
    //    .then(function(res){
    //        console.log(res);
    //     self.addedMovies.list.results.id.poster_path = res.data.data
    //    }).catch(function(err){

    //    })
    // }

    self.getMovies = function(){
        $http({
            method:'GET',
            url:'/movies'
        }).then(function(res){
            console.log(res);
            self.addedMovies.list = res.data
        }).catch(function(err){
            console.log('err in GET / getMovies request', err);
            
        })
    }
    self.getMovies();
    
    self.deleteMovie = function(movieId){
        console.log('in delete movie');
        $http({
            method:'DELETE',
            url:`/movies/${movieId}`,
        }).then(function(res){
            self.getMovies();
            self.getGenre();
        }).catch(function(err){
            console.log('we have a err in the deleteMovie DELETE req', err);
        })
    }
    self.getMovies();

//////////////////////////////////////////////////////////////////////
    self.postGenre = function(genreToAdd){
        $http({
            method:'POST',
            url:'/genre',
            data: genreToAdd
        }).then( function(res){
            console.log(res);
            self.getGenre();
        }).catch(function(err){
            console.log('we have a error at postGenre', err);
        })
    }
    

    self.getGenre = function(){
        console.log('getting genre');
        $http({
            method:'GET',
            url:'/genre'
        }).then(function(res){
            console.log(res);
            self.genreOfMovies.list = res.data
        }).catch(function(err){
            console.log('err in getGenre',err);
            
        })
    }
    self.getGenre();


    self.deleteGenre = function(genreId){
        console.log('deleting genre');
        $http({
            method:'DELETE',
            url:`/genre/${genreId}`
        }).then(function(res){
            console.log(res);
           
            self.getGenre();
        }).catch(function(err){
            console.log('we have a err in deleteGenre req', err);
        })
    }

////////////////////////////////////////////////////////////////
    
//    self.clearInputs = function(){
//     self.newMovie.name = null
//     self.movie.genre = null
//     self.movie.release_date = null
//     self.movie.image_path = null
//     self.movie.run_time = null
//    }

}]);    