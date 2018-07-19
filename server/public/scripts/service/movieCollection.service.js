app.service('MovieCollectionService', ['$http', function($http){
    console.log('MovieCollectionService Started');
    
    let self = this;

    self.addedMovies = {
        list:[]
    }
    
    self.collectionOfMovies = {
        list:[]
    }
        
}]);