let app = angular.module('movieApp', ['ngRoute'])

app.config( function($routeProvider){

    $routerProvider
    .when('/add', {
        templateUrl: 'views/addEntry.html',
        controller: 'AddEntryController as vm'
    })
    .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageMoviesController as vm'
    }).otherwise({
        redirectTo: '/'
    })
})