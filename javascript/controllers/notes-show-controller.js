/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular-route.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\ngnotewrangler\notes.db.js" />

angular.module('NoteWrangler').controller('NotesShowController',function ($routeParams, Note) {
    var controller = this;
    // $http({method: 'GET', url: '/notes/'+ $routeParams.id}).success(function(data){
    //     controller.note = data;
    // });
    //console.log('here');
    
    //controller.note = notesdb[$routeParams.id-1];
    controller.note = Note.noteById($routeParams.id);

    //mark down 
    //var converter = new showdown.Converter();
    //controller.note.note = $sce.trustAsHtml(converter.makeHtml(controller.note.note));
});