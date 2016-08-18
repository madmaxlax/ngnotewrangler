/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\jquery\jquery.d.ts" />


angular.module("NoteWrangler")
    .directive("markdown",function($sce){
        var num = 1;
        return {
            restrict: 'E',
            template: '<div ng-bind-html="content"></div>',
            scope: {
                mdText: '='
            },
            link: function(scope, element, attrs){
                var converter = new showdown.Converter();
                scope.content = $sce.trustAsHtml(converter.makeHtml(scope.mdText+''));
            }
        };
    });