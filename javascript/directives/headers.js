/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />


angular.module("NoteWrangler")
    .directive("nwHeaders", function ($location) {
        return {
            restrict: 'E',
            templateUrl: 'templates/headers.html',
            link: function (scope, element, attrs) {
                scope.isActive = function (viewLocation) {
                    //console.log(viewLocation,$location.path() );
                    return $location.path().indexOf(viewLocation) == 0;
                };
            }
        };
    });