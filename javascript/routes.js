/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular-route.d.ts" />

angular.module('NoteWrangler')
    .config(function($routeProvider){
        $routeProvider.when('/notes',{
            templateUrl: 'templates/pages/notes/index.html',
            controller: 'NotesIndexController',
            controllerAs: 'indexController'
        }).when('/notes/:id',{
            templateUrl: 'templates/pages/notes/show.html',
            controller: 'NotesShowController',
            controllerAs: 'showController'
        })
        // .when('/notes.db',{
        //     templateUrl: 'notes.db'
        // })
        .when('/users',{
            templateUrl: 'templates/pages/users/index.html'
        })
        .when('/',{
            templateUrl: 'templates/pages/notes/index.html'
        })
        .otherwise( {redirectTo: '/'});
    });