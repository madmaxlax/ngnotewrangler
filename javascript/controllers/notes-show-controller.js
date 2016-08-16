/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular-route.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\ngnotewrangler\notes.db.js" />

angular.module('NoteWrangler').controller('NotesShowController',function ($http, $routeParams) {
    var controller = this;
    // $http({method: 'GET', url: '/notes/'+ $routeParams.id}).success(function(data){
    //     controller.note = data;
    // });
    //console.log('here');
    controller.note = notesdb[$routeParams.id-1];
});