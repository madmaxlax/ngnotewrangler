/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular-route.d.ts" />

angular.module('NoteWrangler').controller('NotesIndexController',function ($http) {
    var controller = this;

    this.saveNote = function (note) {
        controller.errors = null;
        $http({method: 'POST', url: '/notes', data: note})
            .catch(function(note){
                controller.errors = note.data.error;
            });

    };

});