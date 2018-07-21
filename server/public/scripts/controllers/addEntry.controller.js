app.controller('AddEntryController', ['MovieCollectionService', function(MovieCollectionService){
    console.log('AddEntryController Works');
    
    let self = this;

    self.addedMovies = MovieCollectionService.addedMovies;

    self.addMovies = MovieCollectionService.addMovies;

    self.getMovies = MovieCollectionService.getMovies;

    self.genreOfMovies = MovieCollectionService.genreOfMovies
}])