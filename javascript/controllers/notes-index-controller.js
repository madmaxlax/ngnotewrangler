/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular-route.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\ngnotewrangler\notes.db.js" />

angular.module('NoteWrangler').controller('NotesIndexController',function ($scope, Note) {
    var controller = this;
    // $http({method: 'GET', url: 'notes.db'}).success(function(data){
    //     controller.notes = data;
    // });
    // controller.notes = [{
    //     id:1,
    //     title: 'TitleNote1',
    //     icon: 'icon1',
    //     description:'descriponslkdn`1',
    //     note:'actualnote'
    // }];
    
    //controller.notes = notesdb;
    controller.notes = Note.all();
});