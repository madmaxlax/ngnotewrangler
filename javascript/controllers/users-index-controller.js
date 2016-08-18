/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular-route.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\ngnotewrangler\notes.db.js" />

angular.module('NoteWrangler').controller('UsersIndexController',function ($scope, Gravatar) {
    $scope.gravatarUrl = function (email){
        return Gravatar(email);
    };
    //$scope.users = usersdb;
});