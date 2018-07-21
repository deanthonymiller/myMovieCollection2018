app.controller('ManageMoviesController', ['MovieCollectionService', function(MovieCollectionService){
    console.log('ManageMoviesController is working');
    
    let self = this

    self.getGenre = MovieCollectionService.getGenre;

    self.postGenre = MovieCollectionService.postGenre;

    self.genreOfMovies = MovieCollectionService.genreOfMovies;
}])