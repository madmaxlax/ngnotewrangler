/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular-route.d.ts" />


var app = angular.module("NoteWrangler", ['ngRoute'])
    .config(function(GravatarProvider){ //IMPORTANT: use function name not the service name 
        GravatarProvider.setSize(100);
    });
