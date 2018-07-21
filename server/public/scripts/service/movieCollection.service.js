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
            url: '/movies/entry',
            data: movieToAdd
        }).then(function(res){
            console.log(res);
            self.getMovies();
            self.getGenre();
        }).catch(function(err){
            console.log('We have a error in the POST addMovies request', err);
            
        })
    }


    self.getMovies = function(){
        $http({
            method:'GET',
            url:'/movies/entry'
        }).then(function(res){
            console.log(res);
            self.addedMovies.list = res.data
        }).catch(function(err){
            console.log('err in GET / getMovies request', err);
            
        })
    }
    self.getMovies();

//////////////////////////////////////////////////////////////////////
    self.postGenre = function(genreToAdd){
        $http({
            method:'POST',
            url:'/movies/genre',
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
            url:'/movies/genre'
        }).then(function(res){
            console.log(res);
            self.genreOfMovies.list = res.data
        }).catch(function(err){
            console.log('err in getGenre',err);
            
        })
    }
    self.getGenre();

////////////////////////////////////////////////////////////////
    
    self.deleteMovie = function(movies_id){
        $http({
            method:'DELETE',
            url:`/movies/${movies_id}`
        }).then(function(res){
            console.log(res);
            
        }).catch(function(err){
            console.log('error in deleteMovie, dont forget that were using movieId');
            
        })
    }

}]);    