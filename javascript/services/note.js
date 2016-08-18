/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />


var app = angular.module("NoteWrangler")
    .factory("Note", ['$http', function NoteFactory($http) {
        return {
            all: function () {
                return notesdb;
            },
            noteById: function (id) {
                // $http({method: 'GET', url: '/notes/'+ $routeParams.id}).success(function(data){
                //     controller.note = data;
                // });
                //console.log('here');
                return notesdb[id - 1];

            },
            create: function (note) {
                //doesnt really do anything
                //return $http({ method: 'POST', url: '/notes', data: note });
                notesdb.push(note);
            }
        };
    }]);