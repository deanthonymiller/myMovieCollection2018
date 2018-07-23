let app = angular.module('MovieApp', ['ngRoute','ngMaterial'])

app.config(function($routeProvider){

    $routeProvider
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