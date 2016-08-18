/// <reference path="C:\Apps\Dropbox\Dev\typings\angularjs\angular.d.ts" />
/// <reference path="C:\Apps\Dropbox\Dev\typings\jquery\jquery.d.ts" />


angular.module("NoteWrangler")
    .directive("nwCard",function($sce){
        var num = 1;
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/nw-card.html',
            scope: {
                note: '='
            },
            // controller: function($scope){
            //     $scope.header = 'Note Title from nw controllers' + num++;
            // }
            link: function(scope, element, attrs){
                element.on("click", function(){
                    //console.log(attrs.note);
                    element.find("div.card>p ").toggleClass("hidden");
                });
                //var converter = new showdown.Converter();
                //scope.note.note = $sce.trustAsHtml(converter.makeHtml(scope.note.note));
            }
        };
    });